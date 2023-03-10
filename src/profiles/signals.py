from .models import Profile
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=User)
def post_save_create_profile(sender, *args, **kwargs):
    instance = kwargs['instance']
    created = kwargs['created']
    print(sender, instance, created)
    if created:
        Profile.objects.create(user=instance)
