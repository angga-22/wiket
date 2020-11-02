import React from 'react';
import { Box } from 'pieces';
import { motion } from 'framer-motion';

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
