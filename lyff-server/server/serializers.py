from rest_framework import serializers
from django.contrib.auth.models import User
from server.models import Comment, Doctor, Document, Patient, Medication, DoctorPatient


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'doctor', 'patient', 'comment', 'private')


class DoctorSerializer(serializers.ModelSerializer):
    # TODO: Add hyperlink
    # patients = 'http://localhost:8000/doctorpatient?doctor=' + Doctor.id

    class Meta:
        model = Doctor
        fields = ('url', 'id', 'firstname', 'lastname', 'specialty', 'photo',)


class DoctorPatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = DoctorPatient
        fields = ('id', 'doctor', 'patient',)


class DocumentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = ('id', 'doctor', 'patient', 'file', 'private')


class PatientSerializer(serializers.ModelSerializer):
    # TODO: Add hyperlink
    # doctors = 'http://localhost:8000/doctorpatient?patient=' + Patient.healthcard
    class Meta:
        model = Patient
        fields = ('url', 'firstname', 'lastname', 'email', 'password', 'phone', 'age',
                  'weight', 'height', 'healthcard', 'photo',)


class MedicationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Medication
        fields = ('id', 'doctor', 'patient', 'medication', 'dose')


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'id', 'username', )
