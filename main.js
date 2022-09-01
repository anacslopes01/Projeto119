function setup()
{
  canvas = createCanvas(280, 280);
   canvas.center()
    canvas.background("white")
    canvas.mouseReleased(classifyCanvas);
}
function preload()
{
    classifier = ml5.imageClassifier('DoodleNet')
}
sketch = ""
array1=['pen','paper','book','bottle','mouse','telephone','clock,','printer']
randomNumber = Math.floor((Math.random()*array1.length))
element_of_array = array1[randomNumber]
console.log(randomNumber)
console.log(element_of_array)
sketch = element_of_array
document.getElementById("esbocoDesenho").innerHTML = "Esboço a ser Desenhado: " + element_of_array;
timerCounter = 0;
timerCheck = "";
drawSketch = "";
answerHolder = "";
score = 0;
function updateCanvas()
{
    canvas.background("white")
}
function draw()
{
    
    strokeWeight(7);
 stroke(0);
 if(mouseIsPressed)
{
    line(pmouseX, pmouseY, mouseX, mouseY)
}
    // checkSketch()
    // if(drawSketch == sketch)
    // {
        // answerHolder = "set"
      //  score =+ 1;
    //  document.getElementById("potuacao").innerHTML = "Pontuação: " + score;
  //  }
    checkSketch()
    if(drawSketch == sketch)
    {
        answerHolder = "set"
        score++
        document.getElementById('score').innerHTML = 'Pontuação: ' + score;
    }
}


 function checkSketch()
 {
   
    timerCounter++
    document.getElementById("tempo").innerHTML = "Tempo: " + timerCounter;
    //console.log(timerCounter);
    if(timerCounter > 400)
    {
        timerCounter = 0;
        timerCheck = "completed"
    }
    if(timerCheck == "completed" || answerHolder == "set")
    {
       timerCheck = ""
       answerHolder = ""
       updateCanvas()
      
    }
 }
 function classifyCanvas()
 {
    classifier.classify(canvas, gotResult);
 }
 function gotResult(error, results)
 {
    if(error)
    {
        console.error(error)
    }
     drawSketch = results[0].label;
    document.getElementById("esbocoDesenho").innerHTML = 'Nome: ' + drawSketch.replace('_', ' ');
    document.getElementById("precisao").innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
 }
