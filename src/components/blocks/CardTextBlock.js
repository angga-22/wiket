import React from 'react';

import { Heading, Paragraph } from '@thepuzzlers/pieces';

export const CardTextBlock = ({ title, text, large }) => (
  <>
    <Heading
      as='h5'
      type={large ? 'h5-700' : 'h5-500'}
      sx={{
        mt: ['12px', '12px', '12px', '12px', '12px', '18px'],
        mb: ['4px', '4px', '4px', '4px', '4px', '6px'],
      }}
    >
      {title}
    </Heading>
    <Paragraph as='p' type='body-300'>
      {text}
    </Paragraph>
  </>
);
