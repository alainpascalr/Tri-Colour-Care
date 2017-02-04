from rest_framework import serializers
from django.contrib.auth.models import User
from server.models import Doctor, Patient, DoctorPatient


class DoctorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Doctor
        fields = ('url', 'id', 'firstname', 'lastname', 'specialty', 'photo',)


class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = ('url', 'firstname', 'lastname', 'email', 'password', 'phone', 'age',
                  'weight', 'height', 'healthcard', 'photo',)


class DoctorPatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = DoctorPatient
        fields = ('id', 'doctor', 'patient',)


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'id', 'username',)
