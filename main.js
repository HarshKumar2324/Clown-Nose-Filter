nosex=0;
nosey=0;

function preload(){
    clown=loadImage('https://i.postimg.cc/8zMN7dMH/clown-Nose.png');
}

function setup(){
canvas=createCanvas(300, 300,);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log("modelloaded");
}

function gotPoses(result){
if(result.length>0){
    console.log(result);
    nosex= result[0].pose.nose.x-15;
    nosey= result[0].pose.nose.y-15;
}
}

function draw(){
image(video, 0, 0, 300, 300);
image(clown, nosex, nosey, 30, 30);}

function take_snapshot(){
    save('clownNoseimg.png');
    }


/*fill(255,0,0);
stroke(255,0,0);
circle(nosex,nosey,25) ;*/
