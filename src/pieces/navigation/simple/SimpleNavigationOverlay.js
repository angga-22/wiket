/* eslint-disable max-len */
// external imports
import React from 'react';
import PropTypes from 'prop-types';
import { GridWrapper } from '@thepuzzlers/pieces';
// eslint-disable-next-line max-len
import { useSimpleNavigationContext } from './SimpleNavigationContext';

export const SimpleNavigationOverlay = ({ children }) => {
  const { overlayControls, variants } = useSimpleNavigationContext();
  return (
    <GridWrapper
      className='simple-navigation-overlay--wrapper'
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

SimpleNavigationOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};
