# Generated by Django 3.1 on 2020-09-02 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('poker', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='evaluated',
            field=models.BooleanField(default=False),
        ),
    ]