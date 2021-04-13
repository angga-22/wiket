import React from 'react';
import { Box } from './Box';

export const Block = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    variant='contentBlock'
    {...props}
    __themeKey='blocks'
    __css={{
      position: 'relative',
    }}
  />
));
