import React from 'react';
import PropTypes from 'prop-types';
import { GridItem } from '@thepuzzlers/pieces';

export const LegalPageGridItem = ({ sx, children }) => (
  <GridItem
    sx={{
      gridColumnStart: ['1', '1', '2', '4', '6'],
      gridColumnEnd: ['13', '13', '24', '22', '20'],
      mt: ['10vw', '5vw', '5vw', '2vw'],
      ...sx,
    }}
  >
    {children}
  </GridItem>
);

LegalPageGridItem.propTypes = {
  sx: PropTypes.shape(),
  children: PropTypes.node.isRequired,
};

LegalPageGridItem.defaultProps = {
  sx: {},
};
