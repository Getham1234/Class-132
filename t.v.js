function back(){
    window.location.replace("index.html");
}

img = "";
status = "";

function preload(){
    img = loadImage("TV.jpeg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResults);
}

function draw(){
    image(img, 0, 0, 640, 420);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}