import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Heading } from '@thepuzzlers/pieces';
// Local imports
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
