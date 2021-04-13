import React from 'react';
import { motion } from 'framer-motion';
import { Box } from './Box';

export const Image = React.forwardRef((props, ref) => (
  <Box ref={ref} as={motion.img} {...props} />
));
