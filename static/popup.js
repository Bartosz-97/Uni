const main = document.querySelector('main');
const burgerMenu = document.querySelector('.burger');
const player = document.querySelector('.player');
const playerMobile = document.querySelector('section:nth-child(5) .picture .player');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

let activePopup = true;

if (activePopup) {
  popup.addEventListener('click', () => {
    popup.style.display = 'none';
    main.style.filter = 'none';
    burger.style.filter = 'none';
  })
} else {
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  })
}

player.addEventListener('click', () => {
  popup.style.display = 'flex';
  main.style.filter = 'blur(5px)';
  burger.style.filter = 'blur(5px)';
})

playerMobile.addEventListener('click', () => {
  popup.style.display = 'flex';
  main.style.filter = 'blur(5px)';
  burger.style.filter = 'blur(5px)';
})

