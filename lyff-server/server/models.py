from django.db import models


class Patient(models.Model):
    firstname = models.CharField(max_length=25, default="Testy")
    lastname = models.CharField(max_length=25, default="Tester")
    email = models.EmailField(default="tester@placeholder.com")
    password = models.CharField(default="fakepassword", max_length=40)
    phone = models.CharField(default="5191231234", max_length=20)
    age = models.IntegerField(default=-1)
    weight = models.IntegerField(default=-1)
    height = models.IntegerField(default=-1)
    healthcard = models.IntegerField(default=000000000)
    photo = models.ImageField(upload_to='/Users/robcardy/Programming/PycharmProjects/Health/server/images',
                              null=True, max_length=255)


class Doctor(models.Model):
    firstname = models.CharField(max_length=25, default="Doctor")
    lastname = models.CharField(max_length=25, default="Nurse")
    specialty = models.CharField(max_length=50, default="Proctology")
    photo = models.ImageField(upload_to='/Users/robcardy/Programming/PycharmProjects/Health/server/images',
                              null=True, max_length=255)


