import React from 'react';
import { GridWrapper } from 'pieces';
import { useOverlayContext } from 'pieces/utils/context';

export const BackgroundOverlay = ({ children }) => {
  const { controlFadingBackground } = useOverlayContext();
  return (
    <GridWrapper
      animate={controlFadingBackground}
      sx={{
        display: 'none',
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#fff',
        zIndex: 1000,
        opacity: 0,
        top: 0,
      }}
    >
      {children}
    </GridWrapper>
  );
};
