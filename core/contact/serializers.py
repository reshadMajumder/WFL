from rest_framework import serializers
from .models import BookConsignment,ContactMessage


class BookConsignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookConsignment
        fields = '__all__'


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'