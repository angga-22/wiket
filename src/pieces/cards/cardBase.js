// external dependencies
import React from 'react';

// pieces components
import { Box } from 'pieces/box';

export const CardBase = React.forwardRef((props, ref) => (
  <Box
    className='card--background'
    ref={ref}
    {...props}
    variant='primary'
    __themeKey='cards'
    __css={{ backgroundColor: '#fff' }}
  />
));
