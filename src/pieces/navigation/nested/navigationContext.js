import React, { createContext, useContext, useState } from 'react';
import { useThemeUI } from 'theme-ui';
import { useAnimation, useMotionValue } from 'framer-motion';
import { useLocation } from '@gatsbyjs/reach-router';

const NavigationContext = createContext();
export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationContextProvider = ({ children }) => {
  const location = useLocation();
  const {
    theme: { animations },
  } = useThemeUI();

  // theme animation style lookups
  const variants = {
    overlay: animations.navigation.overlay,
    // used by both: main-links and sub-links
    linkContainer: animations.navigation.links.container,
    linkItems: animations.navigation.links.items,
  };

  // animation controls which get passed down to the client component
  // -> overlay
  const overlayControls = useAnimation();
  const controlOverlay = {
    open: () => overlayControls.start('open'),
    close: () => overlayControls.start('close'),
  };

  // -> main-links
  const linkControls = useAnimation();
  const controlLinks = {
    open: () => linkControls.start('appear'),
    close: () => linkControls.start('disappear'),
  };

  // -> sublinks
  const subLinkControls = useAnimation();
  const controlSubLinks = {
    open: () => subLinkControls.start('appear'),
    close: () => subLinkControls.start('disappear'),
  };

  // Navigation Icon Animation
  const isOpen = useMotionValue(false);
  const openIconControls = useAnimation();
  const closeIconControls = useAnimation();

  // Keeps track where the user is when clicking through the nav
  // Indicates wheter SubNavigation is open, by storing href of parent
  const [activeSubNavigation, setActiveSubNavigation] = useState(null);

  // helper functions that orchestrate all animated parts
  const closeNavigation = async () => {
    // Fade out Items
    controlSubLinks.close();
    controlLinks.close();
    // Switch icon
    openIconControls.start({ display: 'flex' });
    closeIconControls.start({ display: 'none' });
    // Close overlay
    controlOverlay.close();
    // update isOpen
    isOpen.set(!isOpen.get());
  };
  const openNavigation = async () => {
    // Open overlay
    await controlOverlay.open();

    // Depending on current location open subnav or main nav links
    const uriParts = location.pathname
      .split('/')
      .filter((uriPart) => uriPart !== '');
    // "/project/first-post" => ["project", "first-post"]
    if (uriParts.length > 1) {
      openSubNavigation(`/${uriParts[0]}`);
    } else {
      controlLinks.open();
      controlSubLinks.close();
    }

    // icon
    openIconControls.start({ display: 'none' });
    closeIconControls.start({ display: 'flex' });
    // update isOpen
    isOpen.set(!isOpen.get());
  };

  const openSubNavigation = (href) => {
    // the  open animation of sublinks is handled in MotionSubLinkContainer
    // as the animation has to wait until the dynamic sublinks are rendered
    setActiveSubNavigation(href);
    controlLinks.close();
    controlSubLinks.open();
  };

  const closeSubNavigation = () => {
    controlLinks.open();
    controlSubLinks.close();
    setActiveSubNavigation(null);
  };

  return (
    <NavigationContext.Provider
      value={{
        subLinkControls,
        controlLinks,
        controlSubLinks,
        overlayControls,
        openNavigation,
        openSubNavigation,
        closeSubNavigation,
        closeNavigation,
        variants,
        linkControls,
        isOpen,
        openIconControls,
        closeIconControls,
        activeSubNavigation,
        setActiveSubNavigation,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
