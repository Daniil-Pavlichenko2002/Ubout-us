document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__meny').classList.toggle('open');
    document.querySelector('body').classList.toggle('noscroll');
    document.querySelector('.footer').classList.toggle('footer__fixed');
    document.querySelector('.tap__button').classList.toggle('button__fixed');
    document.querySelector('.header__shadow').classList.toggle('open');
})
document.querySelector('.header__shadow').addEventListener('click', function() {
    document.querySelector('.header__shadow').classList.remove('open');
    document.querySelector('.header__meny').classList.toggle('open');
    document.querySelector('.header__burger').classList.remove('active');
    document.querySelector('body').classList.remove('noscroll');
    document.querySelector('.footer').classList.remove('footer__fixed');
    document.querySelector('.tap__button').classList.remove('button__fixed');
})
