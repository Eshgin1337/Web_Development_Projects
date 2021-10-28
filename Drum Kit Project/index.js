for(var i = 0; i < document.querySelectorAll("button").length; i++) 
{

    document.querySelectorAll(".drum")[i].addEventListener("click", function () { 

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    });
};

document.addEventListener("keydown", function (event) {
    var key = event.key;
    makeSound(key)
    buttonAnimation(key);
})


function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        default:
            break;
    }
}

function buttonAnimation(key) {
    var currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");
    setTimeout(function () {
        currentButton.classList.remove("pressed");
    }, 200);
}
