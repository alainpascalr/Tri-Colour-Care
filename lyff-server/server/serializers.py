from rest_framework import serializers
from django.contrib.auth.models import User
from server.models import Doctor, Patient


class DoctorSerializer(serializers.ModelSerializer):
    patients = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())

    class Meta:
        model = Doctor
        fields = ('url', 'id', 'firstname', 'lastname', 'specialty', 'photo', 'patients')


class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = ('url', 'firstname', 'lastname', 'email', 'password', 'phone', 'age',
                  'weight', 'height', 'healthcard', 'photo',)


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'id', 'username',)
