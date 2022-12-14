from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import NewsletterSerializer
from rest_framework import serializers, status,viewsets
from rest_framework.response import Response

# Create your views here.

class NewsletterView(APIView):
    def post(self , request):
        serializer = NewsletterSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)