# Generated by Django 4.2 on 2023-05-02 14:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0003_profile_password'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='password',
        ),
    ]