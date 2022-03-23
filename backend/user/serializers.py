from user.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'user_recipes', 'is_active', 'created_date', 'updated_date']
        read_only_field = ['is_active', 'created_date', 'updated_date']