var startButton = document.querySelector(".start");
var title = document.querySelector(".title");
var newDiv;
var newPar;
var button1;
var button2;
var button3;
var button4;
var timer;
var timerElement;
var timerCount;
var questionArray = ["What is a variable", "What is an array", "What is a modulus", "What is an object"];
var answerArray = ["A name that holds a value", "It is an expression", "A theory", "A function"];
timerCount = 5;

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    title.parentNode.removeChild(title);
    startButton.parentElement.removeChild(startButton);
    newDiv = document.createElement("div");
    newPar = document.createElement("p");
    button1 = document.createElement("button");
    button2 = document.createElement("button");
    button3 = document.createElement("button");
    button4 = document.createElement("button");
    newDiv.setAttribute('class', 'container');
    button1.setAttribute('class', 'choice')
    button1.setAttribute('id', 'button1');
    button2.setAttribute('class', 'choice');
    button2.setAttribute('id', 'button2');
    button3.setAttribute('class', 'choice');
    button3.setAttribute('id', 'button3');
    button4.setAttribute('class', 'choice');
    button4.setAttribute('id', 'button4');
    timer = document.createElement("p");
    timer.setAttribute('class', 'timer-count');
    timerElement = document.querySelector(".timer-count");
    var textNode = document.createTextNode(answerArray[0]);
    var textNode2 = document.createTextNode(answerArray[1]);
    var textNode3 = document.createTextNode(answerArray[2]);
    var textNode4 = document.createTextNode(answerArray[3]);
    var questionText = document.createTextNode(questionArray[0]);
    button1.appendChild(textNode);
    button2.appendChild(textNode2);
    button3.appendChild(textNode3);
    button4.appendChild(textNode4);
    newPar.appendChild(questionText);
    document.body.appendChild(timer);
    document.body.appendChild(newDiv);
    newDiv.appendChild(newPar);
    newDiv.appendChild(button1);
    newDiv.appendChild(button2);
    newDiv.appendChild(button3);
    newDiv.appendChild(button4);
    startTimer(timerCount);
}

function generateQuestion(){

}

function startTimer(counter){
timer.textContent = counter;
}

function getHighScore(){

}
