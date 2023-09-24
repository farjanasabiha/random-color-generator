let body = document.getElementById("body");
let text = document.getElementById("text");
let btn = document.getElementById("btn")

btn.addEventListener("click", () =>{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "#" + randomColor;
    text.innerHTML = "#" + randomColor;
    text.style.color = "#" + randomColor;

})