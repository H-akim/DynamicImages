var prev = document.getElementById("prev").addEventListener("click",()=>{
    if (i > 0) { 
        hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
});
var i = 0;
var next = document.getElementById("next").addEventListener("click",()=>{
    if (i < 4) { 
        hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
});
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = [
    "images/bg1.png",
    "images/bg2.png",
    "images/bg3.png",
    "images/bg4.png",
    "images/bg5.png",
    ];