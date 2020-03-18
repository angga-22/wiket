export const lockOrReleaseBody = async ({
  animation,
  animateContent = () => {},
  isOpen,
  body,
  currentScroll,
}) => {
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
    window.scrollTo(0, currentScroll.get());
    // animate the overlay out
    animation();
  } else {
    // animate the overlay in
    await animation();
    // lock the body
    currentScroll.set(window.pageYOffset);
    body.style.position = 'fixed';
    body.style.overflow = 'hidden';
    body.style.height = '100%';
    // animate the overlay content in
    animateContent();
  }
};
