
song = "";
function preload(){
  song = loadSound("music.mp3");
}
function setup(){
   canvas = createCanvas(720,400);
   canvas.center();
   video  = createCapture(VIDEO);
   video.hide();
   canvas.position(350,350)
}
function draw(){
    image(video,0,0,720,400);
    fill(0,100,25);
    rect(90, 40, 460,20);
    rect(90,420,460,20);
    rect(40, 90, 20, 300);
    rect(580,90,20,300);
    fill(0, 0, 128);
    circle(50, 50, 80);
     circle(50, 430, 80);
      circle(590, 50, 80);
       circle(590, 430, 80)
}
function play(){
    song.play();
}

function Pro(){
    window.location.replace="Pro.html";
    window.location="Pro.html";
}

