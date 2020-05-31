from django.db import models

class BeautyServices(models.Model):
    services=models.CharField(max_length=100)

class Locations(models.Model):
    city=models.CharField(max_length=100)
