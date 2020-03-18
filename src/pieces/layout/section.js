// external dependencies
import React from 'react';
import { motion } from 'framer-motion';
// pieces components
import { GridWrapper } from 'pieces/grid';

export const Section = React.forwardRef(({ as, ...props }, ref) => {
  const motionElement = as ? motion[as] : motion.section;
  return <GridWrapper ref={ref} {...props} as={motionElement} />;
});
