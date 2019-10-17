from django.shortcuts import render
from PIL import Image,ImageDraw,ImageFont
import random
from django.http import HttpResponse
from .models import UserInfo,CarBug,Order
from django.shortcuts import redirect
import os

# Create your views here.
def index(request):
    username = request.session.get('username','未登录')
    code = 2
    if(username!="未登录"):
        user = UserInfo.objects.get(username=username)
        if(user.decide==True):
            code = 1
        else:
            code = 0
    return render(request,'paopaoapp/index.html',{'username':username,'code':code})

def paopao(request):
    username = request.session.get('username','未登录')
    if username == '未登录':
        path,verify_key = get_verify()
        request.session['verify'] = verify_key
        return render(request,'paopaoapp/login.html',{'path':path})
    user = UserInfo.objects.get(username = username)
    return render(request,'paopaoapp/need.html',{'adress':user.adress})

def order(request):
    carbug = CarBug.objects.filter(is_delete=False)
    print(carbug)
    return render(request,'paopaoapp/goodslist.html',{'goodslist':carbug})

def login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = UserInfo.objects.get(username = username)
    verify = request.POST['verify']
    if (verify==request.session.get('verify')) and user:
        request.session['username'] = username
        code = 0
        if user.decide == True:
            code = 1
        return render(request,'paopaoapp/index.html',{'username':request.session.get('username','未登录'),'code':code})
    return render(request,'paopaoapp/index.html',{'username':request.session.get('username','未登录')})

def regist(request):
    return render(request,'paopaoapp/regist.html')

def adduser(request):
    usertable = UserInfo()
    usertable.name = request.POST['name']
    usertable.username = request.POST['username']
    usertable.password = request.POST['password']
    usertable.tel = request.POST['tel']
    usertable.userid = request.POST['userid']
    usertable.adress = request.POST['adress']
    if(request.POST['gender']=='man'):
        usertable.gender = True
    else:
        usertable.gender = False
    if (request.POST['decide'] == 'paopao'):
        usertable.decide = True
    else:
        usertable.decide = False
    usertable.borth = request.POST['borth']
    usertable.save()
    request.session['username'] = usertable.username
    code = 0
    if usertable.decide==True:
        code = 1
    return render(request,'paopaoapp/index.html',{'username':request.session.get('username','未登录'),'code':code})

def exit(request):
    del request.session['username']
    return redirect('http://localhost:8000')

def addorder(request):
    username = request.session.get('username')
    user = UserInfo.objects.get(username = username)
    carbug = CarBug()
    carbug.is_delete = False;
    carbug.user_id = user.id
    carbug.price = request.POST['price']
    carbug.adress = request.POST['adress']
    carbug.save()
    return render(request,'paopaoapp/index.html',{'username':username,'code':1})

def getorder(request):
    username = request.session.get('username','未登录')
    user = UserInfo.objects.get(username = username)
    carbug_id = request.GET['id']
    order = Order()
    order.user_id = user.id
    order.carbug_id = carbug_id
    order.save()
    carbug = CarBug.objects.get(pk=carbug_id)
    carbug.is_delete = True
    carbug.save()
    return render(request,'paopaoapp/index.html',{'username':username,'code':0})

def verifyname(request):
    username = request.POST['username']
    user = UserInfo.objects.values('username')
    user = [data['username'] for data in user]
    if username not in user:
        return HttpResponse(0)
    else:
        return HttpResponse(1)

def verifypassword(request):
    username = request.POST['username']
    user_list = UserInfo.objects.values('username','password')
    user = [data['username'] for data in user_list]
    pwd = [data['password'] for data in user_list]
    password = request.POST['password']
    if username not in user or password not in pwd:
        return HttpResponse(0)
    else:
        return HttpResponse(1)

def verifyverify(request):
    verify = request.POST['verify']
    if (verify==request.session['verify']):
        return HttpResponse(1)
    else:
        return HttpResponse(0)

def get_verify():
    num = 'abcdefghijklmn1234567890'
    str_list = ''
    s = ''
    image = Image.new('RGB', (200, 50), (255, 255, 0))
    draw = ImageDraw.Draw(image)
    font = ImageFont.truetype('/CONSOLA.TTF', 30)
    for i in range(4):
        s = random.choice(num)
        str_list += s
        w = 25 + 50 * i
        draw.text((w, 10), s, font=font, fill=(255, 0, 0))
    file_name = os.listdir('static/paopaoapp/verify/')
    if file_name:
        os.remove('static/paopaoapp/verify/'+file_name[0])
    randnum = int(random.random()*1000)
    path = 'static/paopaoapp/verify/'+str(randnum)+'verify.png'
    image.save(path)
    return path,str_list

def insteadverify(request):
    path,verify_value = get_verify()
    request.session['verify'] = verify_value
    return HttpResponse(path)

def test(request):
    return render(request,'paopaoapp/html.html')