canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=30;

background_image = "mars.jpg";
rover_image = "rover.png";

function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;


rover_imgTag = new Image();
rover_imgTag.onload = uploadRover;
rover_imgTag.src = rover_image;


}


function uploadBackground(){

ctx.drawImage(background_imgTag, 0 , 0 , canvas.width , canvas.height );



}

function uploadRover(){

    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

    
}
window.addEventListener("keydown" , my_keydown);

function my_keydown(e){

keyPressed=e.KeyCode;

if(keyPressed == '38'){
up();

console.log("When Up arrow key pressed ");

}
if(keyPressed == '40'){
down();
console.log("When Down arrow key pressed");

}

if(keyPressed == '37'){
left();
console.log("When Left arrow key pressed");

}
if(keyPressed == '39'){

    right();
    console.log("When Right arrow key pressed");
}
} 


function up(){
   if(rover_y>=0){
        rover_y = rover_y - 10;
  uploadBackground();
    uploadRover();
console.log("up");
} 


}

function down(){
if(rover_y<=500){
    rover_y = rover_y + 10;
uploadBackground();
    uploadRover();
console.log("down");
}

}

function left(){

if(rover_x>=0){
    rover_x = rover_x - 10;
uploadBackground();
uploadRover();
console.log("left");
}

}

function right(){

    if( rover_x<=600){
        rover_x = rover_x + 10;
    uploadBackground();
    uploadRover();
    console.log("right");
    }

}