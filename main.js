const burger = document.querySelector('.burger');
const menuBar = document.querySelector('.menu');
const burgerMenu = document.querySelector('.fa-bars');
console.log

burger.addEventListener('click' , (e)=>{
    burgerMenu.classList.toggle('fa-times');
    menuBar.classList.toggle('active')
});