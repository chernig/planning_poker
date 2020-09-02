from django.db import models

# Create your models here.
class Story(models.Model):
    points = models.IntegerField(blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)
    evaluated = models.BooleanField(default=False, blank=True, null=True)
    title = models.CharField(max_length=100)