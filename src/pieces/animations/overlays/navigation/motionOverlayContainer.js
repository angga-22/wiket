// external imports
import React from 'react';
import PropTypes from 'prop-types';
import { GridWrapper } from '@thepuzzlers/pieces';

// Local imports
import { useNavigationContext } from 'pieces/navigation/nested/navigationContext';

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
