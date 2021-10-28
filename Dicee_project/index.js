document.querySelector(".img1").setAttribute("src", "images/dice6.png");
document.querySelector(".img2").setAttribute("src", "images/dice6.png");

random_num = Math.random();
randomNumber1 = Math.floor(random_num*6 + 1);

image1 = "images/dice" + randomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src", image1);

random_num = Math.random();
randomNumber2 = Math.floor(random_num*6 + 1);

image2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", image2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = '<em><i class="fas fa-flag-checkered"></i> Player 1 Wins</em>'
    document.querySelector("h1").innerHTML = '<em><i class="fas fa-flag-checkered"></i> Player 1 Wins</em>'
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = '<em><i class="fas fa-flag-checkered"></i> Player 2 Wins</em>'
} else {
    document.querySelector("h1").innerHTML = 'Draw!'
}


