import React from 'react';
import { Box } from 'pieces/box';

export const MotionCardContainer = ({ children, custom, index, ...props }) => (
    <Box {...props} custom={{ ...custom }}>
      {children}
    </Box>
  );
