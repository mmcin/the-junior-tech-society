from django.conf import settings
from django.contrib import admin
from django.urls import path
from user_profile.views import user_profile

urlpatterns = [
    path('', user_profile, name='user_profile'),
]