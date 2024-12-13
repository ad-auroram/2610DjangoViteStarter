from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Session(models.Model):
    token = models.TextField(unique=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class Character(models.Model):
    name= models.TextField()
    info = models.TextField(blank=True)
    avatar = models.TextField(blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class CharacterImage(models.Model):
    link = models.TextField(null=True, blank=True)
    character =models.ForeignKey(Character, on_delete=models.CASCADE)
