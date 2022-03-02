from django.forms import fields_for_model
from rest_framework import serializers
from recipe.models import Ingredient, Ingredients, Instructions, Chef, Recipe

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('name',)


class IngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = ('line_item',)


class InstructionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructions
        fields = ('line_item',)


class ChefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chef
        fields = ('chef_name', 'chef_id')


class RecipeSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer(read_only=True, many=True)
    ingredients = IngredientsSerializer(read_only=True, many=True)
    instructions = InstructionsSerializer(read_only=True, many=True)
    chef = ChefSerializer(read_only=True, many=True)

    class Meta:
        model = Recipe
        fields = (
            'id', 
            'name', 
            'chef', 
            'cooking_time_minutes', 
            'description', 
            'instructions',
            'ingredient',
            'ingredients',
            'photo_url',
            'preparation_time_minutes',
            'serves',
            'total_time_minutes',
        )

