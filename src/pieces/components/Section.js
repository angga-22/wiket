// external dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// pieces components
import { GridWrapper } from './GridWrapper';

export const Section = React.forwardRef(({ as, ...props }, ref) => {
  const motionElement = as ? motion[as] : motion.section;
  return <GridWrapper ref={ref} {...props} as={motionElement} />;
});

Section.propTypes = {
  as: PropTypes.string,
};

Section.defaultProps = {
  as: null,
};
