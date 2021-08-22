// external imports
import React from 'react';
import PropTypes from 'prop-types';
import { GridItem } from '@thepuzzlers/pieces';
// Local imports
import { useNavigationContext } from 'pieces/navigation/nested/navigationContext';

export const MotionLinkContainer = ({ children, ...props }) => {
  const { linkControls, variants } = useNavigationContext();

  return (
    <GridItem
      className='links--wrapper'
      {...props}
      variants={variants.linkContainer}
      initial={variants.linkContainer.disappear}
      animate={linkControls}
    >
      {children}
    </GridItem>
  );
};

MotionLinkContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
