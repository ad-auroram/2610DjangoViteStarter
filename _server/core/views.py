from django.shortcuts import render
from django.conf  import settings
import json
import os
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.forms.models import model_to_dict
from .models import Character, CharacterImage

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
        body = json.loads(req.body)
        character = Character(
            name=body["character"],
            info=body["info"],
            avatar=body["image"],
            user=req.user
        )

        character.save()
        return JsonResponse({"character": model_to_dict(character)})
    

@login_required
def characters(req):
    characters = Character.objects.all().order_by('-id')
    characters = [model_to_dict(character) for character in characters] 
    return JsonResponse({"characters": characters})

@login_required
def char(req, id):
    character = Character.objects.get(id=id)
    character_dict = model_to_dict(character)
    return JsonResponse({"character": character_dict})

@login_required
def get_pics(req, id):
    character = Character.objects.get(id=id)
    images = CharacterImage.objects.filter(character=character)
    images = [model_to_dict(image) for image in images]
    return JsonResponse({"images": images})


@login_required
def add_pic(req, id):
    character = Character.objects.get(id=id)
    if character.user.id != req.user.id:
        character= -1
        return JsonResponse({"character": model_to_dict(character)})
    if req.method == "POST": 
        body = json.loads(req.body)
        image = CharacterImage(
            link=body["image"],
            character = character
        )

        image.save()
        return JsonResponse({"image": model_to_dict(image)})
    
@login_required
def edit(req, id):
    character = Character.objects.get(id=id)
    if character.user.id != req.user.id:
        character= -1
        return JsonResponse({"character": model_to_dict(character)})
    print(req.user.id)
    if req.method == "POST": 
        body = json.loads(req.body)
        character.name=body["name"]
        character.info=body["info"]
        character.avatar=body["image"]
        character.user=req.user

        character.save()
        return JsonResponse({"character": model_to_dict(character)})
    

