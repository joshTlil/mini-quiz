var storage = localStorage.getItem("myUser");
var parsing = JSON.parse(storage);
var span1 = document.querySelector(".span1");
var span2 = document.querySelector(".span2");
span1.textContent = parsing["name"];
span2.textContent = ("Score " + parsing["correct"]);