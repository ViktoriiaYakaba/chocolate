
const modalBtn = document.querySelector(".btn-buy")
const modalBtnClose = document.querySelector('.btn-modal');
const modal = document.querySelector('.backdrop');


modalBtn.addEventListener("click", function () {
    modal.classList.add("active");
});

modalBtnClose.addEventListener("click", function () {
    modal.classList.remove("active")
});

const btnMenu = document.querySelector(".header-modal");
const btnClose = document.querySelector(".btn-menu-header");
const menu = document.querySelector(".header-menu-modal");

btnMenu.addEventListener("click", function () {
    menu.classList.add("active")
});

btnClose.addEventListener("click", function () {
    menu.classList.remove("active")
});
		
