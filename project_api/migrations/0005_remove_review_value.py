# Generated by Django 4.2 on 2023-05-04 14:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('project_api', '0004_review_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='value',
        ),
    ]
