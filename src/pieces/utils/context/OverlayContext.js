import React, { createContext, useContext } from 'react';
import { useThemeUI } from 'theme-ui';
import { useMotionValue, useAnimation } from 'framer-motion';

const OverlayContext = createContext();
export const useOverlayContext = () => useContext(OverlayContext);

export const OverlayContextProvider = ({ children }) => {
  const {
    theme: { animations },
  } = useThemeUI();

  const isOpen = useMotionValue(false);
  const controlOverlay = useAnimation();
  const controlFadingBackground = useAnimation();

  const animate = {
    open: animations.video.overlay.open,
    close: animations.video.overlay.close,
  };
  const showOrHideOverlay = async () => {
    if (isOpen.get() === false) {
      await controlFadingBackground.start({
        opacity: 1,
        display: 'block',
        transition: { type: 'tween', duration: 0.1 },
      });
      isOpen.set(true);
    } else {
      controlFadingBackground.start({ opacity: 0, display: 'none' });
      isOpen.set(false);
    }
  };
  const closeOverlayContent = () => controlOverlay.start(animate.close);

  const openOverlayContent = () => controlOverlay.start(animate.open);

  return (
    <OverlayContext.Provider
      value={{
        isOpen,
        controlOverlay,
        showOrHideOverlay,
        closeOverlayContent,
        openOverlayContent,
        controlFadingBackground,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};
