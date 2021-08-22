import React from 'react';
import PropTypes from 'prop-types';
import motion from 'framer-motion';
import { Box } from '@thepuzzlers/pieces';

export const TextArea = React.forwardRef(({ variant, ...props }, ref) => (
  <Box
    ref={ref}
    variant={variant}
    as={motion.textarea}
    {...props}
    __themeKey='forms'
    __css={{
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      appearance: 'none',
      border: 'inherit',
    }}
  />
));

TextArea.propTypes = {
  variant: PropTypes.string,
};

TextArea.defaultProps = {
  variant: 'textarea',
};
