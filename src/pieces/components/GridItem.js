import React from 'react';
import { Box } from 'pieces';

export const GridItem = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    variant='gridColumnFallback'
    {...props}
    __themeKey='measure'
    __css={{
      position: 'relative',
    }}
  />
));
