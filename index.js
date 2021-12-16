//To add all the image elements inside an array.
let myPix= new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png")
//Calculation for the first random number generator.
let randomNumber1=Math.random();
randomNumber1=randomNumber1*myPix.length;
randomNumber1=Math.floor(randomNumber1);
//Calculation for the second random number generator.
let randomNumber2=Math.random();
randomNumber2=randomNumber2*myPix.length;
randomNumber2=Math.floor(randomNumber2);


//Using DOM to change the two images source attributes.
document.getElementById("image1").src=myPix[randomNumber1];
document.getElementById("image2").src=myPix[randomNumber2];

// Calculation for determining the winner.
if(randomNumber1>randomNumber2){
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 1 Wins"
    }
else if(randomNumber2>randomNumber1){
       document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 2 Wins"}
else{
       document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Draw!!!"
}