function preload(){

}
 function setup(){
    canvas = createCanvas(740,580);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color="";
 }

 function draw(){
    image(video, 50, 50, 640,480);
 tint(tint_color);
 ellipse(710,550,60);
 ellipse(30,550,60);
 ellipse(30,30,60);
 ellipse(710,30,60);
rect(20,60,25,460);
rect(700,60,25,460);
rect(60,20,620,25);
rect(60,540,620,25);
 }
 function take_snapshot(){
    save('virus.png');
 }
function color_takeover(){
    tint_color = document.getElementById("cerulean").value;
}