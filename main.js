
noseX = 0;
noseY = 0;



function preload()
{
    mooch = loadImage("https://i.postimg.cc/SxgTbSMg/R.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialised homework star  ted...");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y;
        console.log("nose.x = " + noseX);
        console.log("nose.y = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mooch, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('clownFilterimagemyuser111111111.png');
}