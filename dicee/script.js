var value1 = document.querySelectorAll(".dice")[0].querySelector(".player1");
var value2 = document.querySelectorAll(".dice")[1].querySelector(".player2");

var ans1 = Math.floor( ( Math.random() * 6 ) + 1 );
var ans2 = Math.floor( ( Math.random() * 6 ) + 1 );

value1.setAttribute("src","images/dice"+ans1+".png")
value2.setAttribute("src","images/dice"+ans2+".png")

if(ans1 > ans2){
    document.querySelector(".refree").textContent = "🚩 Player 1 won"
} else if(ans1 < ans2){
    document.querySelector(".refree").textContent = "Player 2 won 🚩"
}else if(ans1 = ans2){
    document.querySelector(".refree").textContent = "This is a tie"
}