/* eslint-disable max-len */
// External imports
import React from 'react';
import PropTypes from 'prop-types';
import { GridItem } from '@thepuzzlers/pieces';
// Local imports
import { useNavigationContext } from '../navigationContext';

export const MotionSubLink = ({ link, children }) => {
  const { variants, openSubNavigation } = useNavigationContext();
  return (
    <GridItem
      className='overlay--items'
      variants={variants.linkItems}
      initial={variants.linkItems.disappear}
      onClick={() => {
        openSubNavigation(link.href);
      }}
    >
      {children}
    </GridItem>
  );
};

MotionSubLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }).isRequired,
};
