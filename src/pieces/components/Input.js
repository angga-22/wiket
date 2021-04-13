import React from 'react';
import { motion } from 'framer-motion';
import { Box } from './Box';

export const Input = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    variant='input'
    as={motion.input}
    {...props}
    __themeKey='forms'
    __css={{
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      appearance: 'none',
      border: 'inherit',
    }}
  />
));
