# Generated by Django 3.2.12 on 2022-02-24 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0004_auto_20220224_1947'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chef',
            name='recipe',
        ),
        migrations.AddField(
            model_name='recipe',
            name='chef',
            field=models.ManyToManyField(to='recipe.Chef'),
        ),
    ]