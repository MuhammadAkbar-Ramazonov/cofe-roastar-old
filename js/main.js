var elOpenMenu = document.querySelector(".button")
var elOpenList = document.querySelector(".sitenav")

elOpenMenu.addEventListener("click", function(){
    elOpenList.classList.toggle("show-block");
    elOpenMenu.classList.toggle("button--active");
});
