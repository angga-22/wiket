// external dependencies
import React from 'react';
import { motion } from 'framer-motion';
// pieces components
import { Box } from 'pieces/box';

export const Main = React.forwardRef((props, ref) => (
  <Box ref={ref} as={motion.main} {...props} />
));
