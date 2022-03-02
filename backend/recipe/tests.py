from recipe.models import Ingredient, Ingredients, Instructions, Chef, Recipe
import json

f = open('../data/test-data.json')

data = json.load(f)

for recipe in data:
# Create New Recipe
    new_recipe = Recipe.objects.create(
        name=recipe['title'],
        cooking_time_minutes=recipe['cooking_time_minutes'],
        description=recipe['description'],
        photo_url=recipe['photo_url'],
        preparation_time_minutes=recipe['preparation_time_minutes'],
        serves=recipe['serves'],
        total_time_minutes=recipe['total_time_minutes']
        )
    print(f'Recipe added -- {new_recipe.name}')
# Check if Chef exists, add to recipe or create if false
    if Chef.objects.filter(chef_id=recipe['chef_id']).exists():
        new_recipe.chef.add(Chef.objects.get(chef_id=recipe['chef_id']))
        print(f"Exisiting Chef Added to Recipe -- {recipe['chef']}")
    else:
        new_chef = Chef.objects.create(
                chef_name=recipe['chef'],
                chef_id=recipe['chef_id'],
                )
        new_recipe.chef.add(new_chef)
        print(f"New Chef Added to Recipe -- {new_chef.chef_name}")
# Add Recipe Instructions
    for line_item in recipe['instructions']:
        instruction = Instructions.objects.create(line_item=line_item)
        new_recipe.instructions.add(instruction)
        print(f'Instruction added --  {instruction.id} for Recipe {new_recipe.id}')
# Add Recipe Ingredients
    for line_item in recipe['ingredients']:
        ingredient = Ingredients.objects.create(line_item=line_item)
        new_recipe.ingredients.add(ingredient)
        print(f'Ingredient added --  {ingredient.id} for Recipe {new_recipe.id}')
# Add Recipe Individual Ingredients
    for item in recipe['instructions_detailed']:
        if Ingredient.objects.filter(name=item['ingredient']).exists():
            new_recipe.ingredient.add(Ingredient.objects.get(name=item['ingredient']))
            print(f'Exisitng Ingredient Item added --  {item["ingredient"]} for Recipe {new_recipe.id}')
        else:
            ingredient_item = Ingredient.objects.create(name=item['ingredient'])
            new_recipe.ingredient.add(ingredient_item)
            print(f'New Ingredient Item added --  {ingredient_item.id} for Recipe {new_recipe.id}')
    print(f'Completed - {new_recipe.id}')
    print('--')
    print('Next Recipe ...')