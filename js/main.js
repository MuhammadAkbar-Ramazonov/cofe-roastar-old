var elOpenMenu = document.querySelector(".button")
var elOpenList = document.querySelector(".sitenav")
var elCloseBtn = document.querySelector(".button-close")
var elOverly = document.querySelector(".overly")

elOpenMenu.addEventListener("click", function(){
    elOpenList.classList.toggle("show-block");
});
elOpenMenu.addEventListener("click", function(){
    elOpenMenu.classList.toggle("button-close");
});
elOpenMenu.addEventListener("click", function(){
    elOverly.classList.toggle("overly-style");
});
