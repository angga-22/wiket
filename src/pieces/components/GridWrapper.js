import React from 'react';
import { Box } from './Box';

export const GridWrapper = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    variant='proportional.wrapper'
    {...props}
    __themeKey='grids'
    __css={{ display: 'grid', position: 'relative' }}
  />
));
