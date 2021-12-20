

rightWristX= 0;
leftWristX= 0;
difference = 0;

function setup() 
{
    video= createCapture(VIDEO);
    video.size(550,580);
    video.position(20,100);

    canvas= createCanvas(550,500);
    canvas.position(650,120);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#808080');
    fill('#FFC0CB');
    textSize(difference);
    text('Saanvy',50,250);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0) 
 {
     console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX );
 }
}