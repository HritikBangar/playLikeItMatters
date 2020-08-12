var dice1img=( Math.floor((Math.random())*6) + 1 ) ;
var dice2img=( Math.floor((Math.random())*6) + 1 ) ;
var img1src="images/dice"+dice1img+".png";
var img2src="images/dice"+dice2img+".png";

document.querySelectorAll("img")[0].setAttribute("src",img1src);
document.querySelectorAll("img")[1].setAttribute("src",img2src);

if(dice1img>dice2img){
  document.querySelectorAll("h1")[0].innerHTML="player one wins";
}
else if(dice2img>dice1img){
  document.querySelector("h1").innerHTML="player two wins";
}
else{
  document.querySelector("h1").innerHTML="draw";
}
