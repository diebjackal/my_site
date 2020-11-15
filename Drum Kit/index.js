var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOfDrumButtons; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", function handleClick() {
        alert("I got clicked!");
    });
}