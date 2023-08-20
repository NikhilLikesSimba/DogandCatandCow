

function startClassification()
{
    navigator.mediaDevices.getUserMedia ({ audio: true })
    classifier = ml5.soundClassifier ('https://teachablemachine.withgoogle.com/models/QZp09PI2s/', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
  
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log (results);
        random_number_r = Math.floor(Math.random() * 255) + 1 ;
        random_number_g = Math.floor(Math.random() * 255) + 1 ;
        random_number_b = Math.floor(Math.random() * 255) + 1 ;

        document.getElementById("result_label").innerHTML='MY EARS TELL ME THAT THE SOUND IS-' + results[0].label;
        document.getElementById("result_confidence").innerHTML='IT IS RIGHT BY-' + (results[0].confidence * 100).toFixed(3) + "%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1=document.getElementById('animal1')
        img2=document.getElementById('animal2')
        img3=document.getElementById('animal3')
        img4=document.getElementById('animal4')

        if (results[0].label == "animal1") {
            img1.src='Dog.gif';
            img2.src='Cat.png';
            img3.src='cow.png';
            
        } else if (results[0].label == "animal2") {
            img1.src='Dog.png';
            img2.src='Cat.gif';
            img3.src='cow.png';
            
        } else if (results[0].label == "animal3") {
            img1.src='Dog.png';
            img2.src='Cat.png';
            img3.src='cow.gif';
            
        } else  {
            img1.src='Dog.png';
            img2.src='Cat.png';
            img3.src='cow.png';
        }
    } 

}