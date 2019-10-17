window.onload = function(){
	/*var x=20;
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	var i = 1;
	setInterval(function(){
	x = x+20;
	/*i = i+1;
	if(i%2){$("#img_id").attr('src',"/static/paopaoapp/image/test.jpg")}else{$("#img_id").attr('src',"/static/paopaoapp/image/timg.png")}*/
	/*if(x>width*0.75){x=20;};
	$("#img_id").css('left',x);
	},200);*/
        

	var name_key = false;
        var username_key = false;
        var password_key = false;
        var tel_key = false;
        var userid_key = false;
        var adress_key = false;
        var borth_key = false;

        $("#name_id").blur(function(){
        if($("#name_id").val()==""){$(this).next().text('名字不能为空')}else{
        var name_compile = /^[\u4e00-\u9fa5]{2,5}$/;
        if(!name_compile.test($(this).val())){$(this).next().text('请输入正确的名字')}
        else{$(this).next().text('');name_key=true;};};
        });
	
        $("#username_id").blur(function(){
        if($(this).val()==""){$(this).next().text("账号不能为空")}else{
        var username_compile = /^[a-zA-Z0-9]{8,}$/;
        if(username_compile.test($(this).val())){$(this).next().text("");username_key=true;}else{
        $(this).next().text("格式不对");
        }
        };
        });

        $("#password_id").blur(function(){
        if($(this).val()==""){$(this).next().text("密码不能为空")}else{
        var username_compile = /^[a-zA-Z0-9]{8,}$/;
        if(username_compile.test($(this).val())){$(this).next().text("");password_key=true;}else{
        $(this).next().text("格式不对");
        }
        };
        });

        $("#tel_id").blur(function(){
        if($(this).val()==""){$(this).next().text("电话不能为空");}else{
        var tel_compile = /^1[34578][0-9]{9}$/;
        if(tel_compile.test($(this).val())){$(this).next().text("");tel_key=true;}else{
        $(this).next().text("请输入正确的电话");
        };
        };
        });

        $("#userid_id").blur(function(){
        if($(this).val()==""){$(this).next().text("身份证不能为空")}else{
        var userid_compile = /^[0-9]{17}[0-9a-zA-Z]$/;
        if(userid_compile.test($(this).val())){$(this).next().text("");userid_key=true;}else{
        $(this).next().text("请输入正确的身份证号");
        };
        };
        });

        $("#adress_id").blur(function(){
        if($(this).val()==""){$(this).next().text("地址不能为空");}else{
        var adress_compile = /^[0-9\#\u4e00-\u9fa5]{2,}$/;
        if(adress_compile.test($(this).val())){$(this).next().text("");adress_key=true;}else{
        $(this).next().text("请输入正确的地址");
        };
        };
        });

        $("#borth_id").blur(function(){
        if($(this).val()==""){$(this).next().text("出生日期不能为空");}else{
        var borth_compile = /^[12][019][0-9]{2}-[0-9]{2}-[0-9]{2}$/;
        if(borth_compile.test($(this).val())){$(this).next().text("");borth_key=true;}else{
        $(this).next().text("请输入正确格式");
        };
        };
        });

        $('#but1').click(function(){
        $("#name_id").trigger('blur');
        $("#username_id").trigger('blur');
        $("#password_id").trigger('blur');
        $("#adress_id").trigger('blur');
        $("#borth_id").trigger('blur');
        $("#tel_id").trigger('blur');
        $("#userid_id").trigger('blur');
        if(name_key&username_key&password_key&tel_key&userid_key&adress_key&borth_key){
        return true;
        }else{return false;}
        });

	$("#username_id").mouseenter(function(){
	$(this).next().css('color','red');
	$(this).next().text("    由９位以上字母或数字组成");
	});
	$("#username_id").mouseleave(function(){
	$(this).next().text("");
	});
	
	$("#password_id").mouseenter(function(){
	$(this).next().css('color','red');
	$(this).next().text("    由9位字母或数字组成");
	});  
	$("#password_id").mouseleave(function(){
	$(this).next().text("");	
	});

	$("#tel_id").mouseenter(function(){
	
	});

        }
