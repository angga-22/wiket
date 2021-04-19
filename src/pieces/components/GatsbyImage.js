import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { Box } from './Box';

export const GatsbyImage = ({ sx, image, ...props }) => (
  <Box sx={sx} {...props}>
    <Img
      alt={image.alt}
      loading='eager'
      style={{
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 'inherit',
      }}
      fluid={image.gatsbyImage.childImageSharp.fluid}
      imgStyle={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      }}
      // IE polyfill
      objectFit='contain'
    />
  </Box>
);

GatsbyImage.propTypes = {
  sx: PropTypes.shape,
  image: PropTypes.shape({
    alt: PropTypes.string,
    gatsbyImage: {
      childImageSharp: {
        fluid: PropTypes.any.isRequired,
      },
    },
  }).isRequired,
};

GatsbyImage.defaultProps = {
  sx: {},
};
