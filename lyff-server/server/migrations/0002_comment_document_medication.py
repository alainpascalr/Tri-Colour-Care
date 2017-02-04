# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-04 18:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('doctor', models.IntegerField(default=-1)),
                ('patient', models.IntegerField(default=-1)),
                ('comment', models.CharField(default='This comment was blank', max_length=1024)),
                ('private', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('doctor', models.IntegerField(default=-1)),
                ('patient', models.IntegerField(default=-1)),
                ('file', models.FileField(max_length=255, null=True, upload_to='Users/robcardy/Programming/PycharmProjects/Lyff/lyff-server/server/documents')),
                ('private', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Medication',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('doctor', models.IntegerField(default=-1)),
                ('patient', models.IntegerField(default=-1)),
                ('medication', models.CharField(default='Tylenol', max_length=255)),
                ('dose', models.CharField(default='1 a day', max_length=255)),
            ],
        ),
    ]
