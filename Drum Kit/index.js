//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOfDrumButtons; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", function handleClick() {
        var buttonLnnerHTML = this.innerHTML;
        makeSound(buttonLnnerHTML);
        buttonAnimaiton(buttonLnnerHTML);
    });
}

//Detecting Keyboard Press
document.addEventListener("keypress", function(event) {

    makeSound(event.key);
    buttonAnimaiton(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            break;
    }
}

function buttonAnimaiton(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(
        function() {
            activeButton.classList.remove("pressed");
        }, 100);
}