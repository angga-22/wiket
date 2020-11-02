import React from 'react';
import { Box } from 'pieces';

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
