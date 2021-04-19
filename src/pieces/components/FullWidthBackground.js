// external dependencies
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// pieces components
import { Box } from './Box';

const defaultStyles = {
  bg: 'secondary',
  position: 'absolute',
  height: '100%',
  zIndex: 0,
  top: 0,
};

export const FullWidthBackground = forwardRef(
  ({ devices, sx, ...props }, ref) => {
    const showBackground = devices.map((device) => {
      if (device === 'full') {
        return 'measure.fullWidth';
      }
      return 'measure.gridColumnFallback';
    });
    return (
      <Box
        className='fullwidth-background'
        ref={ref}
        sx={{
          variant: showBackground,
          ...defaultStyles,
          ...sx,
        }}
        {...props}
      />
    );
  }
);

FullWidthBackground.propTypes = {
  devices: PropTypes.arrayOf(PropTypes.oneOf('full', null).isRequired)
    .isRequired,
  sx: PropTypes.shape,
};

FullWidthBackground.defaultProps = {
  sx: {},
};
