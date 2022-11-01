function preload(){}

function setup()
{
    canvas = createCanvas(359, 359);
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
        console.log("nose.x = " + results[0].pose.nose.x);
        console.log("nose.y = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 1, 0, 640, 480);
}

function take_snapshot()
{
    save('clownFilterimagemyuser111111111.png');
}