'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Webflow is initialized
  let typeSplit = new SplitType('h1', {
    types: 'lines',
    tagName: 'span',
  });

  // On Page Load
  function pageLoad() {
    let tl = gsap.timeline({
      delay: 0.4,
      defaults: {
        ease: 'power2.out',
        duration: 0.6,
      },
    });
    tl.set('.home_component', {
      opacity: 1,
    });
    tl.from(
      '.home_background-image',
      {
        scale: 1.1,
        duration: 1.8,
        ease: 'power1.out',
      },
      '<'
    );
    tl.fromTo(
      '.home_logo',
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
      },
      '<'
    );
    tl.to('.home_logo', {
      yPercent: -50,
      opacity: 0,
    });
    tl.from(
      'h1 .line',
      {
        y: '1rem',
        opacity: 0,
        stagger: { each: 0.2, from: 'left' },
        duration: 0.8,
      },
      '-=.2'
    );
    tl.from(
      '.navbar_component',
      {
        yPercent: -100,
        opacity: 0,
      },
      '-=.2'
    );
    tl.from(
      '.home_button-wrapper',
      {
        y: '1rem',
        opacity: 0,
      },
      '<'
    );
  }
  pageLoad();
});
