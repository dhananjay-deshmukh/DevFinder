# Generated by Django 4.1.3 on 2023-04-26 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project_api', '0002_alter_project_featuredimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='projects', to='project_api.tag'),
        ),
    ]
