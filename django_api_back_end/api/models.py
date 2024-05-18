from django.db import models

# Create your models here.

class StudentModel(models.Model):
    full_name = models.CharField(max_length=100)
    age = models.SmallIntegerField()
    gender = models.CharField(max_length=10)

    def __str__(self):
        return self.full_name
    
