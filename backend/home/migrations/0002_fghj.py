# Generated by Django 3.2.20 on 2023-10-11 07:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='FGHj',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hvjh', models.CharField(max_length=255)),
                ('dcsd', models.BigIntegerField(blank=True, null=True)),
                ('dfsb', models.DateTimeField(blank=True, null=True)),
                ('seffsv', models.TextField(blank=True, null=True)),
                ('afewreg', models.BinaryField(blank=True, null=True)),
                ('sfgebfg', models.SmallIntegerField(blank=True, null=True)),
                ('rel_user_1_1', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='fghj_rel_user_1_1', to=settings.AUTH_USER_MODEL)),
                ('rel_user_1_n', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='fghj_rel_user_1_n', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
