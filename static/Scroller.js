class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = document.querySelectorAll('.scroller');
    const sectionsArr = Array.prototype.slice.call(this.sections);

    
    const currentSectionIndex = sectionsArr.findIndex(function(element) {
      return this.isScrolledIntoView(element);
    }.bind(this)); //Bindowanie funkcji z this

    this.currentSectionIndex = currentSectionIndex < 0 ? 0 : currentSectionIndex;

    this.isThrottled = false;


    // console.log(currentSectionIndex)
    
    // this.isScrolledIntoView(this.sections[0]);
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = Math.floor(rect.bottom);
    const isVissible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVissible;
  }

  listenScroll = (event) => {
    if (this.isThrottled) return;
    this.isThrottled = true;
    setTimeout(() => {
      this.isThrottled = false;
    }, 500) 

    const direction = event.wheelDelta < 0 ? 1 : -1;

    this.scroll(direction);

    if (this.currentSectionIndex) {
      this.sections[this.currentSectionIndex].classList.add('activeAnimation');
    } else {
      this.sections.forEach(section => {
        if(section.classList.contains('activeAnimation')) {
          section.classList.remove('activeAnimation');
        }
      });
    }
  }

  scroll = (direction) => {
    if (direction === 1) {
      const isLastSection = this.currentSectionIndex === this.sections.length -1;
      if(isLastSection) return;
    } else if (direction === -1) {
      const firstSection = this.currentSectionIndex === 0;
      if (firstSection) return;
    }

      this.currentSectionIndex = this.currentSectionIndex + direction;

      this.scrollToCurrentSection()
    }

  scrollToCurrentSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
    behavior: 'smooth',
    block: "start",
    })
  }
}