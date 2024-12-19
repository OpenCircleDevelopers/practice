var length = (document.querySelectorAll(".drum").length) - 1;
var i = 0

for(var i =0 ; i<=length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function clickHandler(){
        alert("you click on button " + this)
    }) 
}
    
