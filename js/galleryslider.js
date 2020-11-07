const btn = document.querySelectorAll('.gallery__img');
const img = document.querySelector('.popup__img');
const closeBtn = document.querySelector('.popup__xbtn');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const html = document.querySelector('html');
const btnLeft = document.querySelector('.popup__btn--left');
const btnRight = document.querySelector('.popup__btn--right');
let index = 1;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        index = i + 1;
        popup.classList.remove('hidden');
        overlay.classList.remove('hidden');
        img.src = `img/PORTFOLIO/img-${[i + 1]}.jpg`;
        html.classList.add('bckhtml');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
};


btnRight.addEventListener('click', function () {
    if (index < btn.length) {
        index++;
        img.src = `img/PORTFOLIO/img-${index}.jpg`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    //hideShowArrows(btn, btnLeft, btnRight, index);
});

btnLeft.addEventListener('click', function () {
    if (index > 1) {
        index--;
        img.src = `img/PORTFOLIO/img-${index}.jpg`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    //hideShowArrows(btn, btnLeft, btnRight, index);
});
closeBtn.addEventListener('click', function () {
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
    html.classList.remove('bckhtml');
});

overlay.addEventListener('click', function () {
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
    html.classList.remove('bckhtml');
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 27 && !popup.classList.contains('hidden')) {
        popup.classList.add('hidden');
        overlay.classList.add('hidden');
        html.classList.remove('bckhtml');
    }
});
