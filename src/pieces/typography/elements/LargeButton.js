import React from 'react';
import { Box } from 'pieces/box';
import { motion } from 'framer-motion';

export const LargeButton = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={motion.span}
    variant='normal'
    __themeKey='typography.largeButton'
    {...props}
  />
));
