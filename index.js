// COUNTER PROGRAM

const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
const countLabel = document.getElementById("countLabel");
let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count++;
countLabel.textContent = count;
}


document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    countLabel.textContent = count;
}


resetButton.onclick = function (){
    countLabel.textContent = 0;
}

