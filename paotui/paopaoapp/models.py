from django.db import models

# Create your models here.
class UserInfo(models.Model):
    username = models.CharField(max_length = 20)
    password = models.CharField(max_length = 50)
    decide = models.BooleanField()
    adress = models.CharField(max_length = 50)
    tel = models.CharField(max_length = 20)
    userid = models.CharField(max_length = 30)
    borth = models.DateField()
    gender = models.BooleanField()
    blanknum = models.CharField(max_length = 50)
    lastlogintime = models.DateTimeField(auto_now = True)

class Order(models.Model):
    user = models.ForeignKey('UserInfo',on_delete = models.CASCADE)
    carbug = models.ForeignKey('CarBug',on_delete = models.CASCADE)

class CarBug(models.Model):
    user = models.ForeignKey('UserInfo',on_delete = models.CASCADE)
    price = models.IntegerField()
    adress = models.CharField(max_length = 50)
    is_delete = models.BooleanField()



