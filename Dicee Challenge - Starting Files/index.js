var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomNumber11 = "images/dice"+randomNumber1+".png";

var randomNumber22 = "images/dice"+randomNumber2+".png";

document.getElementsByClassName("img1")[0].src = randomNumber11; 

document.getElementsByClassName("img2")[0].src = randomNumber22;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🏆";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}



