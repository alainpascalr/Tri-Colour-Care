# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-04 07:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_auto_20170204_0752'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='photo',
            field=models.ImageField(max_length=255, null=True, upload_to='/Users/robcardy/Programming/PycharmProjects/Lyff/lyff-server/server/images'),
        ),
        migrations.AlterField(
            model_name='patient',
            name='photo',
            field=models.ImageField(max_length=255, null=True, upload_to='/Users/robcardy/Programming/PycharmProjects/Lyff/lyff-server/server/images'),
        ),
    ]
