//André, por mais que o código funcione sem o ponto e virgula ; no final dos comandos, é uma boa pratica você coloca-los

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
sketch = "";
array1=['pen','paper','book','bottle','mouse','telephone','clock,','printer'];
//Primeiro sorteio aqui com math.random e com o array, além de mostrar na tela com innerHTML
//André, é uma boa somar 1 quando usar Math.random() porque ele sorteia de 0 a 1 (mas não inclue o 1, sorteando 0.1, 0.2... e assim por diante)
randomNumber = Math.floor((Math.random()*array1.length)+1);
//melhor usar só a variavel do sketch, pois fica mais organizado seu código
sketch = array1[randomNumber];
document.getElementById("esbocoDesenho").innerHTML = "Esboço a ser Desenhado: " + sketch;
timerCounter = 0;
timerCheck = "";
drawSketch = "";
answerHolder = "";
score = 0;
function updateCanvas()
{
    canvas.background("white")
  //é uma boa sortear de novo para deixar o jogo mais dificil
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
    checkSketch();
  //agora esse If deve funcionar, pois lá no inicio coloquei o nome sorteado direto na variavel sketch
    if(drawSketch == sketch)
    {
        answerHolder = "set";
        score++;
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
        timerCheck = "completed";
    }
    if(timerCheck == "completed" || answerHolder == "set")
    {
       timerCheck = "";
       answerHolder = "";
       updateCanvas();
      
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
    } else {  
        drawSketch = results[0].label;
        document.getElementById("esbocoDesenho").innerHTML = 'Nome: ' + drawSketch.replace('_', ' ');
        document.getElementById("precisao").innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
    }
 }
