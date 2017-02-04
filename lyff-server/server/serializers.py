from rest_framework import serializers
from django.contrib.auth.models import User
from server.models import Doctor, Patient


class DoctorSerializer(serializers.ModelSerializer):
    patients = serializers.PrimaryKeyRelatedField(many=True)

    class Meta:
        model = Doctor
        fields = ('url', 'id', 'firstname', 'lastname', 'specialty', 'photo', 'patients')


class PatientSerializer(serializers.ModelSerializer):
    doctors = serializers.PrimaryKeyRelatedField(many=True)

    class Meta:
        model = Patient
        fields = ('url', 'id', 'firstname', 'lastname', 'email', 'password', 'phone', 'age',
                  'weight', 'height', 'healthcard', 'photo', 'doctors')


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'id', 'username',)
