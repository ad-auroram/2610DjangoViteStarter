from django.shortcuts import render
from django.conf  import settings
import json
import os
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.forms.models import model_to_dict
from .models import Character

# Load manifest when server launches
MANIFEST = {}
if not settings.DEBUG:
    f = open(f"{settings.BASE_DIR}/core/static/manifest.json")
    MANIFEST = json.load(f)

# Create your views here.
@login_required
def index(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/main.ts"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/main.ts"]["css"][0]
    }
    return render(req, "core/index.html", context)

@login_required
def me(req):
    return JsonResponse({"user": model_to_dict(req.user)})

@login_required
def new(req):
    if req.method == "POST":
        try:
            print("Raw request body:", req.body)  # Log raw POST body
            body = json.loads(req.body)  # Parse JSON body
            print("Parsed body:", body)
        except Exception as e:
            print("Error parsing JSON:", e)
            return JsonResponse({"error": "Invalid JSON body"}, status=400)
        body = json.loads(req.body)
        character = Character(
            name=body["character"],
            info=body["info"],
            avatar=body["image"],
            user=req.user
        )

        character.save()
        return JsonResponse({"character": model_to_dict(character)})

    characters = [model_to_dict(character) for character in req.user.character_set.all()]
    return JsonResponse({"characters": characters})