import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Box } from 'pieces/box';

export const Link = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={motion.a}
    variant='hyperLink'
    {...props}
    __themeKey='links'
  />
));
