// var storage = localStorage.getItem("highScore");
// var parsing = JSON.parse(storage);
// span1.textContent = parsing["name"];
// span2.textContent = ("Score " + parsing["score"]);

let highScore = JSON.parse(localStorage.getItem("highScore")) || [];
var span1 = document.querySelector(".span1");
var span2 = document.querySelector(".span2");
var nameSpan = document.querySelector(".name");
var scoreSpan = document.querySelector(".score");
let nameElement = document.createElement("p");
let scoreElement = document.createElement("span");


for(let i = 0; i < highScore.length; i++){
let nameElement = document.createElement("span");
let scoreElement = document.createElement("span");

nameElement.classList.add("name");
scoreElement.classList.add("score");

nameElement.textContent = highScore[i].name;
scoreElement.textContent = highScore[i].score;

nameSpan.appendChild(nameElement);
scoreSpan.appendChild(scoreElement);

nameSpan.appendChild(document.createElement("br"));
scoreSpan.appendChild(document.createElement("br"));
}