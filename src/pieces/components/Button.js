import React from 'react';
import { motion } from 'framer-motion';
import { Box } from './Box';

export const Button = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={motion.button}
    variant='primary'
    __themeKey='buttons'
    {...props}
    __css={{
      appearance: 'none',
      border: 'none',
      backgroundColor: 'inherit',
    }}
  />
));
