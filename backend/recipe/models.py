from django.db import models

# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length=255, null=True, default=None)

    def __str__(self):
        return str(self.name)
    

class Ingredients(models.Model):
    line_item = models.CharField(max_length=1024, null=True, default=None)

    def __str__(self):
        return self.line_item


class Instructions(models.Model):
    line_item = models.CharField(max_length=1024)

    def __str__(self):
        return self.line_item


class Chef(models.Model):
    chef_name = models.CharField(max_length=255, null=True, default=None)
    chef_id = models.CharField(max_length=255, null=True, default=None)

    def __str__(self):
        return self.chef_name
    

class Recipe(models.Model):
   name = models.CharField(max_length=255)
   chef = models.ManyToManyField('Chef')
   cooking_time_minutes = models.IntegerField(null=False, default=0)
   description = models.CharField(max_length=4096, null=True, default=None)
   instructions = models.ManyToManyField('Instructions')
   ingredient = models.ManyToManyField('Ingredient')
   ingredients = models.ManyToManyField('Ingredients')
   photo_url = models.URLField(null=True, default=None)
   preparation_time_minutes =  models.IntegerField(null=False, default=0)
   serves = models.IntegerField(null=False, default=0)
   total_time_minutes =  models.IntegerField(null=False, default=0)

   class Meta:
        ordering = ['-id']

   def __str__(self):
        return str(self.name)

