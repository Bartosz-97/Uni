document.addEventListener('DOMContentLoaded', function() {

  const scroller = new Scroller('#root');
  document.addEventListener('mousewheel', scroller.listenScroll);
  document.addEventListener('swipeUp', () => scroller.scroll(1));
  document.addEventListener('swipeDown', () => scroller.scroll(-1));

  document.addEventListener('keydown', (event) => {

    switch (event.keyCode) {
      case 40:
        return scroller.scroll(1)
      case 38:
        return scroller.scroll(-1);
      
      default:
        return
    }
  })
})

const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu__mobile');
const h1 = document.querySelector('.heading__h1');
const blueH1 = document.querySelector('.heading__h1--blue');
const arrowLeft = document.querySelector('.arrow__left');
const arrowRight = document.querySelector('.arrow__right');
const dots = [...document.querySelectorAll('.dots div')];



const activeMenu = () => {
menuMobile.classList.toggle('active');
burger.classList.toggle('change');
burger.classList.toggle('nohover');
}

const slideList = [{
    text1: 'Będziesz uczyć się z ciekawością.',
    text2: 'Obiecujemy.'
  },
  {
    text1: 'Jesteśmy najlepszą uczelnią',
    text2: 'w Polsce.',
  },
  {
    text1: 'U nas spełnisz swoje największe',
    text2: 'Marzenia.',
  },
  {
    text1: 'Poznasz ludzi pełnych',
    text2: 'Pasji.',
  }
]

let active = 0
const time = 5000;

let arrow = true;


const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains('dot__active'));
  dots[activeDot].classList.remove('dot__active');
  dots[active].classList.add('dot__active');
}


const changeSlide = () => {
  active++;
  if(active === slideList.length) {
    active = 0;
  }
  h1.textContent = slideList[active].text1;
  blueH1.textContent = slideList[active].text2;
  changeDot();
}

let indexInterval = setInterval(changeSlide, time);

const manualSlideLeft = () => {
  if(arrow) {
    clearInterval(indexInterval);
    active--;
    if (active < 0) {
      active = slideList.length -1;
    }
  }
  h1.textContent = slideList[active].text1;
  blueH1.textContent = slideList[active].text2;
  indexInterval = setInterval(changeSlide, time);
  changeDot();
}

const manualSlideRight = () => {
  if (arrow) {
    clearInterval(indexInterval);
    active++;
    if (active === slideList.length) {
      active = 0;
    }
  }
  h1.textContent = slideList[active].text1;
  blueH1.textContent = slideList[active].text2;
  indexInterval = setInterval(changeSlide, time);
  changeDot();
}

const nav = document.querySelector('.menu__desktop');
console.log(nav);

window.addEventListener('scroll', function() {
  if (window.scrollY > 720) {
    nav.classList.add('menu__fix');
    nav.classList.remove('menu__desktop');
  } else {
    nav.classList.remove('menu__fix');
    nav.classList.add('menu__desktop')
  }
})

burger.addEventListener('click', activeMenu);
arrowRight.addEventListener('click', manualSlideRight);
arrowLeft.addEventListener('click', manualSlideLeft);