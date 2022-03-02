from csv import list_dialects
from django.contrib import admin
from .models import Chef, Recipe, Ingredient, Ingredients, Instructions

class ChefAdmin(admin.ModelAdmin):
    list_display = ('chef_name',)

class RecipeAdmin(admin.ModelAdmin):
    list_display = ('name',)
    filter_horizontal = ('ingredient', 'ingredients', 'instructions')

class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name',)

class IngredientsAdmin(admin.ModelAdmin):
    list_display = ('line_item',)

class InstructionsAdmin(admin.ModelAdmin):
    list_display = ('line_item',)

admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Chef, ChefAdmin)
admin.site.register(Ingredient, IngredientAdmin)
admin.site.register(Ingredients, IngredientsAdmin)
admin.site.register(Instructions, InstructionsAdmin)


