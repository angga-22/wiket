import React from 'react';
import PropTypes from 'prop-types';
import Box from '@thepuzzlers/pieces';

export const MobileNavigation = ({ children }) => (
  // Box functions as a wrapper to hold the overlay, regardles of how the overlay will look like
  <Box>{children}</Box>
);

MobileNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};
