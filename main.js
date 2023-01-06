function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    background('white');
    canvas.mouseReleased(classfiyCanvas);
    synth = window.speechSynthesis();
}
function clear(){
    background('white');
    
}
function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}
function draw(){
strokeWeight(6);
stroke(0);
if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
}
}
function classfiyCanvas(){
classifier.classify(canvas,gotResult);
}
function gotResult(error, results){
if(error){
console.error(error);
}
console.log(results);
document.getElementById("cool").innerHTML = "Answer Is" + results[0].label;
document.getElementById("accuracy").innerHTML = "Accuracy Is" + Math.round(results[0].confidence * 100) + '%';

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}