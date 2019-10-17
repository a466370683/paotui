window.onload=function(){

var adress_key = false;
var price_key = false;
var needalt_key = false;

$("#adress_id").blur(function(){
if($(this).val()==""){$(this).next().text("地址不能为空")}else{
var adress_compile = /^[0-9\u4e00-\u9fa5]+$/;
if(adress_compile.test($(this).val())){$(this).next().text("");adress_key=true;}else{$(this).next().text("请输入正确地址");};
};
});

$("#price_id").blur(function(){
if($(this).val()==""){$(this).next().text("价格不能为空");}else{
var adress_compile = /^[0-9]+$/;
if(adress_compile.test($(this).val())){$(this).next().text("");price_key=true;}else{$(this).next().text("请输入正确价格");};
};
});

$("#needalt_id").blur(function(){
if($(this).val()==""){$(this).next().text("需求不能为空");}else{
var adress_compile = /^[0-9\u4e00-\u9fa5]+$/;
if(adress_compile.test($(this).val())){$(this).next().text("");needalt_key=true;}else{$(this).next().text("请输入正确需求");};
};
});

$("#sub_id").click(function(){
if(adress_key&price_key&needalt_key){return true;}else{
if(!adress_key){$("#adress_id").next().text("请检查地址")};
if(!price_key){$("#price_id").next().text("请检查价格")};
if(!needalt_key){$("#needalt_id").next().text("请检查描述")};
return false;};
});

};
