import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Box } from './Box';

export const Image = React.forwardRef(({ sx, ...props }, ref) => (
  <Box
    ref={ref}
    as={motion.img}
    {...props}
    sx={{ width: '100%', zIndex: 'inherit', ...sx }}
  />
));

Image.propTypes = {
  sx: PropTypes.shape(),
};

Image.defaultProps = {
  sx: {},
};
