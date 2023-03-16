var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImageFileName = "dice"+randomNumber1+".png";
var imagesource="images/"+diceImageFileName;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource);
var randomNumber2= Math.floor(Math.random() * 6) + 1;
//var diceImageFileName = "dice"+randomNumber1+".png";
var imagesource="images/"+"dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagesource);
if(randomNumber1>randomNumber2){
    document.getElementById("demo").innerHTML = "player1 won!";
}else if(randomNumber1<randomNumber2){
    document.getElementById("demo").innerHTML = "player2 won!";
}else{
    document.getElementById("demo").innerHTML = "draw!";
}