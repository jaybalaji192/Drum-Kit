// alert("clicked");

var nofDrums = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function (event) {
    // console.log(event);
    playSound(event.key)
    anime(event.key)
});

for (let i = 0; i < nofDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.innerText);
        anime(this.innerText)
        // this.style.color = "white";
    });
}

function anime(key) {
    var curr = document.querySelector("." + key);
    console.log(curr);
    // curr.getAttribute();
    curr.classList.add("pressed");

    setTimeout(function () {
        curr.classList.remove("pressed");
    },100)
}


function playSound(word) {
    switch (word) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-4.mp3");
            tom2.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(word);
            break;
    }
}






