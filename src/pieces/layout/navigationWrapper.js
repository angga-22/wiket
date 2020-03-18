// external dependencies
import React from 'react';
import { motion } from 'framer-motion';
// pieces components
import { GridWrapper } from 'pieces/grid';

export const NavigationWrapper = React.forwardRef((props, ref) => (
  <GridWrapper ref={ref} as={motion.nav} {...props} />
));
