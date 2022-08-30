function preload()
{
    classifier = ml5.imageClassifier('Doodlenet')
}
function setup()
{
  canvas = createCanvas(280, 280);
   canvas.center()
    canvas.background("white")
}
sketch = ""
array1=['pen','paper','book','bottle']
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
    //     answerHolder = "set"
    //     score =+ 1;
    //     document.getElementById("potuacao").innerHTML = "Pontuação: " + score;
    // }
    checkSketch()
}


 function checkSketch()
 {
    timerCounter = timerCounter+1
    document.getElementById("tempo").innerHTML = "Tempo: " + timerCounter;
    console.log(timerCounter);
    if(timerCounter > 400)
    {
        timerCounter = 0;
        timerCheck = "completed"
    }
    if(timerCheck == "completed")
    {
        timerCheck = ""
        answerHolder = ""
        updateCanvas()
    }
 }
