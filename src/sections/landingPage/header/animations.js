/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { gsap } from 'gsap/all';

export const mobileAnimationTextAndImg = (
  headlineRef,
  paragraph,
  mainImgAndDescRef
) => {
  const tl = gsap.timeline({
    defaults: { opacity: 0, duration: 1, y: 100, ease: 'power3.out' },
  });

  tl.from(headlineRef.current, {})
    .from(paragraph.current, {}, '<.5')
    .from(mainImgAndDescRef.current, {}, '-=.5');
};

export const mobileCardsAnimation = (cardsRef) => {
  cardsRef.current.forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: '+=500',
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
    });
  });
};

export const headerDesktopAnimation = (
  mainImgAndDescRef,
  cardsRef,
  headlineRef,
  paragraph,
  vectorsRef
) => {
  const [cardOne, cardTwo, cardThree] = cardsRef.current;

  const tl = gsap.timeline({
    defaults: { opacity: 0, duration: 1, ease: 'power2.out' },
  });

  tl.from(mainImgAndDescRef.current, { y: 150 })
    .from(cardOne, { y: 100 })
    .from(cardTwo, { y: 100 }, '-=.6')
    .from(cardThree, { y: 100 }, '-=.4')
    .from(headlineRef.current, {})
    .from(paragraph.current, {})
    .from(vectorsRef.current, {}, '<')
    .to(cardOne, {
      y: 10,
      repeat: -1,
      yoyo: true,
      opacity: 1,
      ease: 'linear',
      duration: 5,
    })
    .to(
      cardTwo,
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        opacity: 1,
        ease: 'linear',
        duration: 5,
      },
      '<'
    )
    .to(
      cardThree,
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        opacity: 1,
        ease: 'linear',
        duration: 5,
      },
      '<'
    )
    .to(
      vectorsRef.current[1],
      {
        y: 10,
        repeat: -1,
        yoyo: true,
        opacity: 1,
        ease: 'linear',
        duration: 5,
      },
      '<'
    )
    .to(
      vectorsRef.current[2],
      {
        y: 10,
        repeat: -1,
        yoyo: true,
        opacity: 1,
        ease: 'linear',
        duration: 5,
      },
      '<'
    );
};
