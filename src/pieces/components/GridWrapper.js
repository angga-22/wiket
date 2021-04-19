import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './Box';

export const GridWrapper = React.forwardRef(({ gridLayout, ...props }, ref) => (
  <Box
    ref={ref}
    variant={gridLayout || 'outside.columns'}
    {...props}
    __themeKey='grids.proportional'
    __css={{ display: 'grid', position: 'relative' }}
  />
));

GridWrapper.propTypes = {
  gridLayout: PropTypes.string,
};

GridWrapper.defaultProps = {
  gridLayout: undefined,
};
