import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Box } from 'pieces/box';

export const Label = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={motion.label}
    variant='normal'
    {...props}
    __themeKey='typography.label'
  />
));
