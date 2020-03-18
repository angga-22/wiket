import React from 'react';
import { Box } from 'pieces/box';
import { motion } from 'framer-motion';

export const Button = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={motion.button}
    variant='normal'
    __themeKey='typography.button'
    {...props}
    __css={{
      appearance: 'none',
      border: 'none',
      backgroundColor: 'inherit',
    }}
  />
));
