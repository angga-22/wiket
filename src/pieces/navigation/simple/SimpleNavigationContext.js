import React, { createContext, useContext } from 'react';
import { useThemeUI, merge } from 'theme-ui';
import { useAnimation, useMotionValue } from 'framer-motion';

const NavigationContext = createContext();
export const useSimpleNavigationContext = () => useContext(NavigationContext);

export const SimpleNavigationContextProvider = ({
  children,
  animations: baseAnimations,
}) => {
  const {
    theme: { animations: themeAnimations },
  } = useThemeUI();
  // Merging pieces animation with client specific theme animations
  const animations = merge(baseAnimations, themeAnimations);

  // theme animation style lookups
  const variants = {
    overlay:
      animations && animations.navigation && animations.navigation.overlay,
    linkItems:
      animations
      && animations.navigation
      && animations.navigation.links
      && animations.navigation.links.items,
  };
  // animation controls which ge17173vet passed down to the client component
  // -> overlay
  const overlayControls = useAnimation();
  const controlOverlay = {
    open: () => overlayControls.start('open'),
    close: () => overlayControls.start('close'),
  };

  // Navigation Icon Animation
  const isOpen = useMotionValue(false);
  const openIconControls = useAnimation();
  const closeIconControls = useAnimation();

  // helper functions that orchestrate all animated parts
  const closeNavigation = async () => {
    // Close overlay
    controlOverlay.close();
    // Switch icon
    openIconControls.start({ display: 'flex' });
    closeIconControls.start({ display: 'none' });
    // update isOpen
    isOpen.set(!isOpen.get());
  };
  const openNavigation = async () => {
    // Switch icon
    openIconControls.start({ display: 'none' });
    closeIconControls.start({ display: 'flex' });
    // update isOpen
    isOpen.set(!isOpen.get());
    // Open overlay
    await controlOverlay.open();
  };

  return (
    <NavigationContext.Provider
      value={{
        overlayControls,
        openNavigation,
        closeNavigation,
        variants,
        isOpen,
        openIconControls,
        closeIconControls,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
