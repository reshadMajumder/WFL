from rest_framework import serializers
from .models import BookConsignment


class BookConsignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookConsignment
        fields = '__all__'