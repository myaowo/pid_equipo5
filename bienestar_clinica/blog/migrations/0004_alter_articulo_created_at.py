# Generated by Django 5.2.1 on 2025-06-02 20:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_articulo_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articulo',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
