let randomNumber1 = Math.floor((Math.random() * 6) + 1);
// alert(randomNumber);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
//========================================================

let randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);
//========================================================

if (randomNumber1 > randomNumber2) {
    document.querySelector(".whoIsWinner").innerHTML = "🚩player 1 win";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector(".whoIsWinner").innerHTML = "player 2 win🚩";
} else {
    document.querySelector(".whoIsWinner").innerHTML = "🚩Draw🚩";
}