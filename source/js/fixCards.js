let fixCards = () => {
  if (document.querySelector('[data-hover="card"]')) {
    let cards = document.querySelectorAll('[data-hover="card"]');
    const mouseEnter = new Event('mouseenter');
    const mouseLeave = new Event('mouseleave');
    let controller = null;
    const breakpoint = window.matchMedia('(max-width: 1023px)');
    cards.forEach((card) => {
      let innerCard = card.querySelector('[data-hover="inner"]');
      card.addEventListener('mouseenter', () => {
        innerCard.classList.add('trainers__card-inner--visible');
      });
      card.addEventListener('mouseleave', () => {
        setTimeout(() => {
          innerCard.classList.remove('trainers__card-inner--visible');
        }, 300);
      });
    });
    const breakpointChecker = () => {
      if (breakpoint.matches && controller === null) {
        controller = new AbortController();
        cards.forEach((card) => {
          card.addEventListener('click', () => {
            card.dispatchEvent(mouseEnter);
            card.focus();
          }, {signal: controller.signal});
        });
      } else if (!breakpoint.matches && controller !== null) {
        cards.forEach((card) => {
          card.dispatchEvent(mouseLeave);
        });
        controller.abort();
        controller = null;
      }
    };
    breakpoint.addEventListener('change', () => {
      breakpointChecker();
    });
    breakpointChecker();
  }
};

export {fixCards};
