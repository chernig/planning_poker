from django.db import models

# Create your models here.
class Story(models.Model):
    points = models.IntegerField()
    description = models.CharField(max_length=1000)
    title = models.CharField(max_length=100)