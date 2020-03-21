import React from 'react';
import { GridItem } from 'pieces/grid';

export const LegalPageGridItem = ({ sx, children }) => (
  <GridItem
    sx={{
      gridColumnStart: ['1', '1', '2', '4', '6'],
      gridColumnEnd: ['13', '13', '24', '22', '20'],
      mt: ['10vw', '5vw', '5vw', '2vw'],
      ...sx,
    }}
  >
    {children}
  </GridItem>
);
