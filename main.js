function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qub6gOuUv/model.json", modelReady)
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = "I can hear: " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy: " + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

    image_1 = document.getElementById("alien_1");
    image_2 = document.getElementById("alien_2");
    image_3 = document.getElementById("alien_3");
    image_4 = document.getElementById("alien_4");

    if(results[0].label == "Bell"){
        image_1.src = "aliens-01.gif";
        image_2.src = "aliens-02.png";
        image_3.src = "aliens-03.png";
        image_4.src = "aliens-04.png";
    } else if(results[0].label == "Clap"){
        image_1.src = "aliens-01.png";
        image_2.src = "aliens-02.gif";
        image_3.src = "aliens-03.png";
        image_4.src = "aliens-04.png";
    }else if(results[0].label == "Snap"){
        image_1.src = "aliens-01.png";
        image_2.src = "aliens-02.png";
        image_3.src = "aliens-03.gif";
        image_4.src = "aliens-04.png";
    }else{
        image_1.src = "aliens-01.png";
        image_2.src = "aliens-02.png";
        image_3.src = "aliens-03.png";
        image_4.src = "aliens-04.gif";
    }
} 
}
