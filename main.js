noseX="";
noseY="";
leftWristX="";
rightWristX="";
diff="";

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(150,160);
    canvas=createCanvas(550,500);
    canvas.position(750,160)


    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;

        diff=floor(leftWristX - rightWristX);
        console.log(diff);
    }
}

function modelLoaded()
{
    console.log("Model has been loaded!");
}


function draw(){
    background("teal")
    rectMode(CENTER);
    fill("pink");
    stroke("pink");
    square(noseX, noseY, diff);
    document.getElementById("size").innerHTML="The size of square is "+diff;
}