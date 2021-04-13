import React from 'react';
import PropTypes from 'prop-types';
// Pieces imports
import { Paragraph, Heading } from 'pieces';
import { LegalPageGridItem } from './LegalPageGridItem';

export const LegalHeaderBlock = ({ headline, introText, sx }) => (
  <LegalPageGridItem sx={{ mt: ['20vw'], mb: ['5em'], ...sx }}>
    <Heading type='h3'>{headline}</Heading>
    {introText && <Paragraph sx={{ mt: ['2em'] }}>{introText}</Paragraph>}
  </LegalPageGridItem>
);

LegalHeaderBlock.propTypes = {
  headline: PropTypes.string.isRequired,
  introText: PropTypes.string,
  sx: PropTypes.shape(),
};

LegalHeaderBlock.defaultProps = {
  introText: null,
  sx: {},
};
