Webcam.set({
  width:310,height:300,img_format:"png",png_quality:90,
  constraints:{facingMode:"environment"}
  //facing mode makes sure the device uses the back camera instead of the front if its a phone
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function takeSnapshot(){
  Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";

});

}
console.log("ml5 version is",ml5.version);
classifier= ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded(){
  console.log("model is successfully loaded");
}
function check(){
img = document.getElementById("captured_image");
classifier.classify(img,gotresult);

}
function gotresult(error,results){
  if (error == true){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
  }
}