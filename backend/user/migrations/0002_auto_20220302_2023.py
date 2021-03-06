# Generated by Django 3.2.12 on 2022-03-02 20:23

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('auth_user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='updated_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
