# todo/serializers.py

from rest_framework import serializers
from .models import Todo
from .models import IndexFields

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')

class IndexFieldsSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndexFields
        fields = ('title', 'cal')
