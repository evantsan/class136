status1 = "";
video = "";
function preload()
{
    video = createVideo("video.mp4");
    video.hide();
}
function setup()
{
    canvas = createCanvas(680,500);
    canvas.center();
}
function draw()
{
    image(video,0,0,680,500);
}
function star()
{
    objectdetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById('stat').innerHTML = "Status : Detecting Objects"
}
function modelLoaded()
{
    console.log("model has been loaded");
    status1 = true;
    video.speed(1);
    video.volume(1);
    video.loop();
}