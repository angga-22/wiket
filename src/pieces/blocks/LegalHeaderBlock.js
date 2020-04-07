import React from 'react';
import { Paragraph, Heading } from 'pieces/typography';
import { LegalPageGridItem } from 'pieces/blocks';

export const LegalHeaderBlock = ({ headline, introText, sx }) => (
  <LegalPageGridItem sx={{ mt: ['20vw'], mb: ['5em'], ...sx }}>
    <Heading type='h3'>{headline}</Heading>
    {introText && <Paragraph sx={{ mt: ['2em'] }}>{introText}</Paragraph>}
  </LegalPageGridItem>
);
