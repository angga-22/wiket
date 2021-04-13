import React from 'react';
import { motion } from 'framer-motion';
import { Box } from './Box';

export const Emphasize = React.forwardRef((props, ref) => (
  <Box ref={ref} as={motion.span} {...props} __themeKey='typography' />
));
