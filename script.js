let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
let path1 = `images/dice${randomNumber1}.png`;
let path2 = `images/dice${randomNumber2}.png`;
image1.setAttribute("src", path1);
image2.setAttribute("src", path2);

let heading = document.getElementById("winner-loser");
if(randomNumber1 === randomNumber2){
    heading.innerHTML = "Draw";
}
else if(randomNumber1 > randomNumber2){
    heading.innerHTML = "Player 1 wins";
}
else{
    heading.innerHTML = "Player 2 wins";
}