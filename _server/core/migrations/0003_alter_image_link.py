# Generated by Django 5.1.3 on 2024-12-13 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_rename_review_character_avatar_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='link',
            field=models.TextField(blank=True, null=True),
        ),
    ]
