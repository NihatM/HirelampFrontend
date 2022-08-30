from django.urls import path
from .views import *

urlpatterns = [
    path('welcome/',NewsletterView.as_view()),
]
