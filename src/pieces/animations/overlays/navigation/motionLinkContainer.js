// external imports
import React from 'react';
import PropTypes from 'prop-types';
// data imports
// pieces imports
import { useNavigationContext } from 'pieces/navigation/nested/navigationContext';
import { GridItem } from 'pieces';
// client imports

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
