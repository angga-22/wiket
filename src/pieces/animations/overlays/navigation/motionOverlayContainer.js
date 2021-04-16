// external imports
import React from 'react';
import PropTypes from 'prop-types';
// Pieces imports
import { useNavigationContext } from 'pieces/navigation/nested/navigationContext';
import { GridWrapper } from 'pieces';

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

MotionOverlayContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
