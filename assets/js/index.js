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
var answerArray2 = ["Just a list", "A collection of items stored in memory location", "It is an expression", "A function"];
var answerArray3 = ["A name that holds a value", "It is an expression", "A Remainder", "A Theory"];
var answerArray4 = ["It is an expression", "It is an expression", "A theory", "A collection of data stored as key-value pairs"];
var count = 0;
var correct = 0;
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

    if(button1.addEventListener){
        button1.addEventListener("click", function(){
            count++;
            if(count < 4){
                if(button1.textContent === "A name that holds a value"){
                    console.log("correct");
                    console.log(count);
                    correct++;
                    timerCount = 2;
                    clearInterval(timerVal);
                    startTimer(timerCount);
                }else {
                    console.log("wrong");
                    console.log(count);
                }
                generateQuestion(count);
                next(count);
            }
        })
    }
    if(button2.addEventListener){
        button2.addEventListener("click", function(){
            count++;
            if(count < 4){
                if(button2.textContent === "A collection of items stored in memory location"){
                    console.log("correct");
                    correct++;
                    timerCount = 2;
                    clearInterval(timerVal);
                    startTimer(timerCount);
                }else{
                    console.log("Wrong");
                }
                generateQuestion(count);
                next(count);
            }
        })
    }
    if(button3.addEventListener){
        button3.addEventListener("click", function(){
            count++;
            if(count < 4){
                if(button3.textContent === "A Remainder"){
                    console.log("correct");
                    correct++;
                    timerCount = 2;
                    clearInterval(timerVal);
                    startTimer(timerCount);
                }else{
                    console.log("wrong");
                }
                generateQuestion(count);
                next(count);
            }
        })
    }
    if(button4.addEventListener){
        button4.addEventListener("click", function(){
            count++;
            if(count < 4){
                if(button4.textContent === "A collection of data stored as key-value pairs"){
                    console.log("correct");
                    correct++;
                    timerCount = 2;
                    clearInterval(timerVal);
                    startTimer(timerCount);
                }else{
                    console.log("Wrong");
                }
                generateQuestion(count);
                next(count);
            }else{
                if(correct > 1){
                    newPar.textContent = "YOU WIN!!!";
                }else{
                    newPar.textContent = "YOU LOSE!!!";
                }
                document.getElementById('button1').style.visibility = 'hidden';
                document.getElementById('button2').style.visibility = 'hidden';
                document.getElementById('button3').style.visibility = 'hidden';
                document.getElementById('button4').style.visibility = 'hidden';
            }
        })
    }
    //Start timer
    startTimer(timerCount);
}

function generateQuestion(count){
newPar.textContent = questionArray[count];
}

function next(count){
    if(count === 1){
        button1.textContent = answerArray2[0];
        button2.textContent = answerArray2[1];
        button3.textContent = answerArray2[2];
        button4.textContent = answerArray2[3];
    }
    if(count === 2){
        button1.textContent = answerArray3[0];
        button2.textContent = answerArray3[1];
        button3.textContent = answerArray3[2];
        button4.textContent = answerArray3[3];
    }
    if(count === 3){
        button1.textContent = answerArray4[0];
        button2.textContent = answerArray4[1];
        button3.textContent = answerArray4[2];
        button4.textContent = answerArray4[3];
    }
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
