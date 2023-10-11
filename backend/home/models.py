from django.conf import settings
from django.db import models
class FGHj(models.Model):
    'Generated Model'
    hvjh = models.CharField(max_length=255,)
    dcsd = models.BigIntegerField(null=True,blank=True,)
    dfsb = models.DateTimeField(null=True,blank=True,)
    seffsv = models.TextField(null=True,blank=True,)
    afewreg = models.BinaryField(null=True,blank=True,)
    sfgebfg = models.SmallIntegerField(null=True,blank=True,)
    rel_user_1_1 = models.OneToOneField("users.User",null=True,blank=True,on_delete=models.CASCADE,related_name="fghj_rel_user_1_1",)
    rel_user_1_n = models.ForeignKey("users.User",null=True,blank=True,on_delete=models.CASCADE,related_name="fghj_rel_user_1_n",)
class Sdfddfbfd(models.Model):
    'Generated Model'
    fgfgngn = models.CharField(max_length=100,)
