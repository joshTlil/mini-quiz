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
var timerVal;
var questionArray = ["What is a variable", "What is an array", "What is a modulus", "What is an object"];
var answerArray = ["A name that holds a value", "It is an expression", "A theory", "A function"];
timerCount = 2;

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
    timer = document.createElement("p");

    newDiv.setAttribute('class', 'container');
    newPar.setAttribute('id', 'question');
    button1.setAttribute('class', 'choice')
    button1.setAttribute('id', 'button1');
    button2.setAttribute('class', 'choice');
    button2.setAttribute('id', 'button2');
    button3.setAttribute('class', 'choice');
    button3.setAttribute('id', 'button3');
    button4.setAttribute('class', 'choice');
    button4.setAttribute('id', 'button4');
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
    //timer gets added above the question container
    document.body.appendChild(timer);
    document.body.appendChild(newDiv);
    //Inside the container append the button and question
    newDiv.appendChild(newPar);
    newDiv.appendChild(button1);
    newDiv.appendChild(button2);
    newDiv.appendChild(button3);
    newDiv.appendChild(button4);
    //Start timer
    startTimer(timerCount);
}

function generateQuestion(){

}

function startTimer(counter){
    //Display the first number of the counter
timer.textContent = counter;
timerVal = setInterval(function(){
    counter--;
    timer.textContent = counter;
    if(counter === 0){
        clearInterval(timerVal);
        timer.textContent = "Game Over";
        getDelay();
    }
}, 1000);
}

function getDelay(){
    var counter = 2;
    var timerVal2 = setInterval(function(){
        counter--;
        console.log(counter);
        if(counter === 0){
            clearInterval(timerVal2);
            getHighScore();
        }
    },1000);
}

function getHighScore(){
// document.getElementById('question').style.visibility = 'hidden';
document.getElementById('button1').style.visibility = 'hidden';
document.getElementById('button2').style.visibility = 'hidden';
document.getElementById('button3').style.visibility = 'hidden';
document.getElementById('button4').style.visibility = 'hidden';

var textArea = document.createElement('textarea');
var submit = document.createElement('button');
var submitNode = document.createTextNode("submit");
newPar.textContent = "Enter Your Name";
submit.setAttribute('class', 'text');
submit.appendChild(submitNode);
newDiv.appendChild(textArea);
newDiv.appendChild(submit);
}
