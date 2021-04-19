// external dependencies
import React from 'react';
import PropTypes from 'prop-types';
// pieces components
import { Box } from './Box';

export const Divider = ({ sx }) => <Box sx={sx} />;

Divider.propTypes = {
  sx: PropTypes.shape(),
};

Divider.defaultProps = {
  sx: {},
};
