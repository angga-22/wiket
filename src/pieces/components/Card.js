// External dependencies
import React from 'react';
// Pieces imports
import { Box } from 'pieces';

export const Card = React.forwardRef((props, ref) => (
  <Box
    className='card--background'
    ref={ref}
    {...props}
    variant='primary'
    __themeKey='cards'
    __css={{ backgroundColor: '#fff' }}
  />
));
