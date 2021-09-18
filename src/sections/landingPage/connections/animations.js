import { gsap } from 'gsap/all';

export const motionChangeSections = (sections) => {
  sections.current.forEach((section) => {
    gsap.to(section.current, {
      scrollTrigger: {
        trigger: section.current,
        markers: 'true',
        start: 'top 10%',
        scrub: 0.5,
      },
      y: -300,
      opacity: 0,
    });
  });
};

export const motionChangeCards = (primaryCards) => {
  primaryCards.current.forEach((wrapper) => {
    gsap.to(wrapper.current, {
      scrollTrigger: {
        trigger: wrapper.current,
        markers: 'true',
        start: 'top 30%',
        end: 'bottom bottom',
        scrub: 0.5,
      },
      y: -300,
      opacity: 0,
    });
  });
};
