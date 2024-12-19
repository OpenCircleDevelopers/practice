var length = (document.querySelectorAll(".drum").length) - 1;
var i = 0

for(var i =0 ; i<=length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function clickHandler(){
        var buttonNameThis = this.innerHTML;
        switch (buttonNameThis) {
            case "w":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "a":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "s":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "l":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
        
            default:
                break;
        }
    }) 
}
    
