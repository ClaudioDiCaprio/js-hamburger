// alert ('alessandro é scemo')

const show = document.querySelector('i');
console.log(show);

show.addEventListener("click" , function(){
    document.querySelector('.hamburger-menu').className = 'hamburger-menu active';
});


const hide = document.querySelector('.close');
console.log(hide);

hide.addEventListener('click' , function(){
    document.querySelector('.hamburger-menu').className = 'hamburger-menu';

});