from django.db import models

class NewsletterModel(models.Model):
    email = models.EmailField(null = True , blank = False)