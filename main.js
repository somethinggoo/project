function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bFFfEkqwU/.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'I can hear : '+
        results[0].label;
        document.getElementById("accuracy").innerHTML = 'Accuracy : '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        img1 = document.getElementById("picture");
        if (results[0].label=="dog") {
        img1.src= "the pic.jpg";
        }
        else if (results[0].label=="cat") {
            img1.src= "th.jpj";
        }
        else if (results[0].label=="bell") {
            img1.src= "th(1).jpg";
        }
        else {
                img1.src= "dd5ed82b-b105-4b93-806f-1f9e718b56ec.png";
            }
        }
    }