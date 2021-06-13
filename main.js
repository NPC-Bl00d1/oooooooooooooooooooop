var canvas = new fabric.Canvas('myCanvas');

var block_width = 30;
var block_height = 30;
var player_x = 10;
var player_y = 10;



var player_object = "";
var block_object = "";

function player_update(){

    fabric.Image.fromURL("player.png", function(Img){
    
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top: player_y, 
        left: player_x
        });
    
        canvas.add(player_object);
    
    });
    
    }
    
    function new_image(get_image){
    
    fabric.Image.fromURL(get_image, function(Img){
    
    block_object = Img;
    block_object.object.scaleToWidth(block_width);
    block_object.object.scaleToHeight(block_height);
    block_object.set({
    
    top: player_y,
    left: player_x
    
    });
    
    canvas.add(block_object);
    
    });
    
    }

    window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){

keypressed = e.keyCode;
console.log("keypressed = keyCode");

if(e.shiftKey == true && keypressed == '80'){
console.log("p and shift pressed");

block_height = block_height + 10;
block_width = block_width + 10;

document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;

}

if(e.shiftKey == true && keypressed == '77'){
console.log("m and shift pressed.")

block_width = block_width - 10;
block_height = block_height - 10;

document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;

}

if(keypressed == '70'){
    new_image("ironman_face.png");
    console.log("face");
}

if(keypressed == '66'){
    new_image("spiderman_body.png");
    console.log("body");
}

if(keypressed == '76'){
    new_image("hulk_legs.png");
    console.log("legs.");
}

if(keypressed == '82'){
    new_image("thor_right_hand.png");
    console.log("right hand.");
}

if(keypressed == '72'){
    new_image("captain_america_left_hand.png");
    console.log("wood block");
}




}