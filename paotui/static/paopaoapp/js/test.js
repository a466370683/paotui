window.onload = function(){
$("#head_id").css("background-color","#0f0");
var array = [];
var left_eye = [100,50,'red'];
var rigth_eye = [20,50,'red'];
var bizi = [60,75,'red'];
var mouse = [60,100,'red'];

function show_body(body,array=[]){
    body.css("position",'absolute');
    body.css("width",'20px');
    body.css("height",'20px');
    body.css("left",array[0]);
    body.css("top",array[1]);
    body.css("background-color",array[2]);
};

function Person(left_eye,rigth_eye,bizi,mouse){
    this.left_eye = left_eye;
    this.right_eye = rigth_eye;
    this.bizi = bizi;
    this.mouse = mouse;

    this.show_person = function(){
    this.show_left_eye();
    this.show_rigth_eye();
    this.show_bizi();
    this.show_mouse();
    };
    this.move = function(){
    this.left_eye[0] = this.left_eye[0] + 20;
    }
    this.show_left_eye = function(){
    $("#h_id").after("<img id='left_eye'>");
    show_body($("#left_eye"),this.left_eye);
    };
    this.show_rigth_eye = function(){
    $("#h_id").after("<img id='rigth_eye'>");
    console.log(rigth_eye);
    show_body($("#rigth_eye"),rigth_eye);
    };
    this.show_bizi= function(){
    $("#h_id").after("<img id='bizi'>");
    show_body($("#bizi"),this.bizi);
    };
    this.show_mouse = function(){
    $("#h_id").after("<img id='mouse'>");
    show_body($("#mouse"),this.mouse);
    };
};
person = new Person(left_eye,rigth_eye,bizi,mouse);
$("#head_id").click(function(){
person.move();
person.show_person();
});
};