var startButton = document.querySelector(".start");
var title = document.querySelector(".title");

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    title.parentNode.removeChild(title);
    startButton.parentElement.removeChild(startButton);
}