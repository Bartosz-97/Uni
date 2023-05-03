class Swiper {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = document.querySelectorAll('.scroller');
    
    this.initialY = null;
    this.initialX = null;

    document.addEventListener('touchstart', (e) => this.startTouch(e));
    document.addEventListener('touchmove', (e) => this.moveTouch(e));
    
    this.events = {
      swipeUp: new Event('swipeUp'),
      swipeDown: new Event('swipeDown'),
      swipeLeft: new Event('swipeLeft'),
      swipeRight: new Event('swipeRight'),
    }
  }

  startTouch(event) {
    // event.preventDefault();
    this.initialX = event.touches[0].clientX;
    this.initialY = event.touches[0].clientY;
    // console.log(this.initialY);
  }

  moveTouch(event) {
    if (!this.initialX || !this.initialY) return;

    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;

    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentY;

    // console.log({ diffX });
    // console.log({ diffY });

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Jesteśmy w osi X
      if (diffX > 0) {
        // W lewo
        document.dispatchEvent(this.events.swipeLeft);
      }
      else {
        // W prawo
        document,dispatchEvent(this.events.swipeRight);
      }
    }
    else {
      // Jesteśmy w osi Y
      if (diffY > 0) {
        // Do góry
        document.dispatchEvent(this.events.swipeUp);
      }
      else {
        // Do dołu
        document.dispatchEvent(this.events.swipeDown);
      }
    }

    this.initialX = null;
    this.initialY = null;
  }
}

new Swiper();