var elOpenMenu = document.querySelector(".button");
var elOpenList = document.querySelector(".sitenav");
var elOpenModelBtn = document.querySelector(".site-inner-form-btn");
var elOpenModel = document.querySelector(".modal");
var elCloseModel = document.querySelector(".modal-btn");

elOpenMenu.addEventListener("click", function(){
    elOpenList.classList.toggle("show-block");
    elOpenMenu.classList.toggle("button--active");
});


elOpenModelBtn.addEventListener("click", function(){
    elOpenModel.classList.add("modal-open");
});

elCloseModel.addEventListener("click", function(){
    elOpenModel.classList.remove("modal-open");
});