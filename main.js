Webcam.attach('#camera');
camera=document.getElementById("camera");
Webcam.set({
    width: 300,
    height: 230,
    image_format: "jpeg",
    jpeg_quality: 90
});
function take(){
    Webcam.snap(function(i){
        document.getElementById("result").innerHTML='<img id="final" src="'+i+'"/>';
    });
}
console.log("ml5 version is loaded",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R4MGC0Uc7/model.json',modelloaded);
function modelloaded(){
    console.log("model has been loaded :)");
}
function guess(){
    f=document.getElementById("final");
    x.classify(f,gotresult);

}
function gotresult(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
document.getElementById("objectname").innerHTML=result[0].label;
document.getElementById("accurate").innerHTML=(result[0].confidence*100).toFixed(2)+"%";
}
}
