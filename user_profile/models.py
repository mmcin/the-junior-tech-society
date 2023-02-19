from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class UserProfile(models.Model):
    """
    A user profile model for maintaining default
    delivery information and order history
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    github = models.CharField(
        max_length=200, null=True, blank=True)
    website = models.CharField(
        max_length=200, null=True, blank=True)
    languages = models.CharField(
        max_length=250, null=True, blank=True)
    bio = models.CharField(
        max_length=1000, null=True, blank=True)
    strengths = models.CharField(max_length=80, null=True, blank=True)
    weaknesses = models.CharField(max_length=20, null=True, blank=True)
    
    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    """
    Create or update the user profile
    """
    if created:
        UserProfile.objects.create(user=instance)
    # Existing users: just save the profile
    instance.userprofile.save()