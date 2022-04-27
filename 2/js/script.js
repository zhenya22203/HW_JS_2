const body = document.querySelector("body");

let left = 100;
let time = 600;
function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
};

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
    body.innerHTML += `<div 
    style="width: 200px;
    height: 200px; 
    position: absolute; 
    top: 250px; 
    left: ${left}px; 
    background-color: ${generateColor()};">
    </div>`
    left += 250;
    }, time);
    time += 1000;
};