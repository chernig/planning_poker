from rest_framework import serializers
from poker.models import Story

class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = '__all__'
    def validate_points(self, value):
        if value < 0:
            return serializers.ValidationError('Points should be positive')
        return value

