var length = (document.querySelectorAll(".drum").length) - 1;
var i = 0

// for(var i =0 ; i<=length; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function clickHandler(){
//         alert("you clicked on button" + i)
//     }) 
// }
    
while(i<=length){
    console.log(i)
    document.querySelectorAll("button")[i].addEventListener("click",clickHandler);
    i++
}
function clickHandler(){
    alert("you clicked on button" + i)
}