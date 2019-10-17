"""paotui URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from paopaoapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index),
    path('paopao/',views.paopao),
    path('order/',views.order),
    path('paopaoapp/login/',views.login),
    path('paopaoapp/regist/',views.regist),
    path('paopaoapp/adduser/',views.adduser),
    path('exit/',views.exit),
    path('paopaoapp/addorder/',views.addorder),
    path('paopaoapp/getorder/',views.getorder),
    path('paopaoapp/verifyname/',views.verifyname),
    path('paopaoapp/verifypassword/',views.verifypassword),
    path('paopaoapp/verifyverify/',views.verifyverify),
    path('paopaoapp/insteadverify/',views.insteadverify),
    path('test/',views.test),
]
