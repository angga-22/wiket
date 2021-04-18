import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Box } from './Box';

import { srcsetValues } from '../theme';

// srcSet must be used from the biggest screen to the smallest as a fallback

export const ResponsiveImage = React.forwardRef(({ images, ...props }, ref) => (
  <Box className='hello' ref={ref} as={motion.picture} {...props}>
    <source srcSet={images[5]} media={srcsetValues[4]} />
    <source srcSet={images[4]} media={srcsetValues[3]} />
    <source srcSet={images[3]} media={srcsetValues[2]} />
    <source srcSet={images[2]} media={srcsetValues[1]} />
    <source srcSet={images[1]} media={srcsetValues[0]} />
    <img src={images[0]} alt='' />
  </Box>
));

ResponsiveImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};
