from rest_framework import serializers
from .models import *

class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterModel
        fields = ['email',]
        extra_kwargs = {'email':{'required':True}}