import React from 'react';
import Box from 'pieces/box';

export const MobileNavigation = ({ children }) => (
  // Box functions as a wrapper to hold the overlay, regardles of how the overlay will look like
  <Box>{children}</Box>
);
