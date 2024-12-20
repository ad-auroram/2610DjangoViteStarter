from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('me/', view=views.me, name="current user"),
    path('new/', view=views.new, name="new character"),
    path('characters/', view = views.characters, name="characters"),
    path('char/<int:id>/', view=views.char, name="char"),
    path('edit/<int:id>/', view=views.edit, name="edit"),
    path('new-image/<int:id>/', view=views.add_pic, name="image"),
    path('imgs/<int:id>/', view=views.get_pics, name="get-image"),
]