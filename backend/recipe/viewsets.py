# Not in use. 
from recipe.serializers import RecipeSerializer
from recipe.models import Recipe
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework import filters


class RecipeViewSet(viewsets.ReadOnlyModelViewSet):
    http_method_names = ['get']
    serializer_class = RecipeSerializer
    permission_classes = (AllowAny,)
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['id']
    ordering = ['-id']
    queryset = Recipe.objects.all()