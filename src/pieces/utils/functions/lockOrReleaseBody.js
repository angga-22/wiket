export const lockOrReleaseBody = async ({
  animation,
  animateContent = () => {},
  isOpen,
  bodyElement,
  currentScroll,
}) => {
  const body = bodyElement;
  // stop any ongoing animations
  // controlNavbar.stop();
  // close the menu
  if (isOpen.get()) {
    // animate the overlay content out
    await animateContent();
    // release the body
    body.style.overflow = 'visible';
    body.style.position = 'relative';
    body.style.height = '100%';
    // scroll to the position on the screen the user was before opening the menu
    // window.scrollTo(0, currentScroll.get());
    window.scrollTo({
      top: currentScroll.get(),
      left: 0,
      behavior: 'auto',
    });
    // animate the overlay out
    animation();
  } else {
    // remember position
    currentScroll.set(window.pageYOffset);

    // animate the overlay in
    await animation();

    // lock the body
    body.style.position = 'fixed';
    body.style.overflow = 'hidden';
    body.style.height = '100%';

    // animate the overlay content in
    animateContent();
  }
};
