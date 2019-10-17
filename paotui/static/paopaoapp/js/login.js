 window.onload = function(){
        $('#but1').click(function(){
        window.location.href = '/paopaoapp/regist/';
       });
       $("#but3").click(function(){
       $.ajax({
       url:'/paopaoapp/insteadverify/',
       type:'post',
       data:{'num':1},
       success:function(data){
       $('#img_id').attr('src','/'+data);
       }
       });
       });
       var username_key = false;
       var password_key = false;
       var verify_key = false;

       $('#name_id').blur(function(){
       if($(this).val()==""){$(this).next().text("账号不能为空");}
       else{
       $.ajax({
            url: '/paopaoapp/verifyname/',
            type: 'post',
            data: {
                username:$(this).val(),
            },
            success: function (data) {
                if(data=='1'){
                $("#span_name").text("");
                username_key = true;}
                else{
                $("#span_name").text("账号不存在");
                }
            },
        })}
       });

       $('#pwd_id').blur(function(){
       if($(this).val()==""){$(this).next().text("密码不能为空");}
       else{
       $.ajax({
            url: '/paopaoapp/verifypassword/',
            type: 'post',
            data: {
                username:$("#name_id").val(),
                password:$(this).val()
            },
            success: function (data) {
                if(data=='1'){
                $("#span_password").text("");
                password_key = true;}
                else{
                $("#span_password").text("账号或密码不正确");
                }
            },
        })
       }
       });

       $('#verify_id').blur(function(){
      if($(this).val()==""){$("#span_verify").text("验证码不能为空");}
      else{
      $.ajax({
            url: '/paopaoapp/verifyverify/',
            type: 'post',
            data: {
                verify:$("#verify_id").val(),
            },
            success: function (data) {
                if(data=='1'){
                $("#span_verify").text("");
                verify_key = true;}
                else{
                $("#span_verify").text("验证不正确");
                }
            },
        })
      }
       });

       $('#but2').click(function(){
       $("#name_id").trigger("blur");
       $("#pwd_id").trigger("blur");
       $("#verify_id").trigger("blur");
       if(username_key&password_key&verify_key){
       return true;
       }else{return false;}
       });
       }
