from django.contrib import admin
from .models import *


class NewsLetterAdmin(admin.ModelAdmin):
    list_display = ('email',)

admin.site.register(NewsletterModel , NewsLetterAdmin)