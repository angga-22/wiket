// external imports
import React from 'react';

// data imports
// pieces imports
import { useNavigationContext } from 'pieces/navigation/navigationContext';
import { GridWrapper } from 'pieces/grid';
// client imports

export const MotionOverlayContainer = ({ children }) => {
  const { overlayControls, variants } = useNavigationContext();

  return (
    <GridWrapper
      className='overlay--wrapper'
      sx={{
        display: 'none',
        position: 'relative',
        overflowX: 'hidden',
        minHeight: '100%',
      }}
      variants={variants.overlay}
      animate={overlayControls}
    >
      {children}
    </GridWrapper>
  );
};
