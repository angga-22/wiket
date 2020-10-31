/* eslint-disable max-len */
// external imports
import React from 'react';
// pieces imports
import { GridWrapper } from 'pieces/grid';
// eslint-disable-next-line max-len
import { useSimpleNavigationContext } from './SimpleNavigationContext';

export const SimpleNavigationOverlay = ({ children }) => {
  const { overlayControls, variants } = useSimpleNavigationContext();
  return (
    <GridWrapper
      className='overlay--wrapper'
      sx={{
        display: 'none',
        position: 'relative',
        overflowX: 'hidden',
        minHeight: '100%',
        backgroundColor: 'background',
      }}
      variants={variants.overlay}
      animate={overlayControls}
    >
      {children}
    </GridWrapper>
  );
};
