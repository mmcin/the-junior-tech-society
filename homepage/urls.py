from django.conf import settings
from django.contrib import admin
from django.urls import path
from homepage.views import homepage

urlpatterns = [
    path('', homepage, name='homepage'),
]