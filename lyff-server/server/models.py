from django.db import models


class Comment(models.Model):
    doctor = models.IntegerField(default=-1)
    patient = models.IntegerField(default=-1)
    comment = models.CharField(default="This comment was blank", max_length=1024)
    private = models.BooleanField(default=False)


class Doctor(models.Model):
    firstname = models.CharField(max_length=25, default="Doctor")
    lastname = models.CharField(max_length=25, default="Nurse")
    email = models.EmailField(default="doctor@placeholder.com")
    specialty = models.CharField(max_length=50, default="Proctology")
    photo = models.ImageField(upload_to='/Users/robcardy/Programming/PycharmProjects/Lyff/lyff-server/server/images',
                              null=True, max_length=255)


class DoctorPatient(models.Model):
    doctor = models.IntegerField(default=1)
    patient = models.IntegerField(default=1)


class Patient(models.Model):
    firstname = models.CharField(max_length=25, default="Testy")
    lastname = models.CharField(max_length=25, default="Tester")
    email = models.EmailField(default="tester@placeholder.com")
    password = models.CharField(default="fakepassword", max_length=40)
    phone = models.CharField(default="5191231234", max_length=20)
    age = models.IntegerField(default=-1)
    weight = models.IntegerField(default=-1)
    height = models.IntegerField(default=-1)
    healthcard = models.IntegerField(default=000000000, primary_key=True)
    photo = models.ImageField(upload_to='/Users/robcardy/Programming/PycharmProjects/Lyff/lyff-server/server/images',
                              null=True, max_length=255)


class Document(models.Model):
    doctor = models.IntegerField(default=-1)
    patient = models.IntegerField(default=-1)
    file = models.FileField(upload_to='Users/robcardy/Programming/PycharmProjects/Lyff/lyff-server/server/documents',
                            null=True, max_length=255,)
    private = models.BooleanField(default=False)


class Medication(models.Model):
    doctor = models.IntegerField(default=-1)
    patient = models.IntegerField(default=-1)
    medication = models.CharField(default='Tylenol', max_length=255)
    dose = models.CharField(default='1 a day', max_length=255)


class Symptom(models.Model):
    patient = models.IntegerField(default=-1)
    symptom = models.CharField(default='Sniffles', max_length=140)