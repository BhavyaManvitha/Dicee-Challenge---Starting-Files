var random1=Math.random();
random1=Math.floor(random1*6)+1;
var random2=Math.random();
random2=Math.floor(random2*6)+1;
randomImage1="./images/dice"+random1+".png";
randomImage2="./images/dice"+random2+".png";
var image1=document.querySelector("img.img1");
image1.setAttribute("src", randomImage1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);


if(random1>random2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}