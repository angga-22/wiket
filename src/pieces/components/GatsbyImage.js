import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage as BaseGatsbyImage, getImage } from 'gatsby-plugin-image';

import { Box } from '@thepuzzlers/pieces';

export const GatsbyImage = ({ sx, image, alt, ...props }) => (
  <Box sx={sx} {...props}>
    <BaseGatsbyImage
      image={getImage(image)}
      alt={alt}
      style={{
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 'inherit',
      }}
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
  sx: PropTypes.shape(),
  alt: PropTypes.string,
  image: PropTypes.shape({
    childImageSharp: {
      gatsbyImageData: PropTypes.shape().isRequired,
    },
  }).isRequired,
};

GatsbyImage.defaultProps = {
  alt: '',
  sx: {},
};
