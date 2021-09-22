import React from 'react';

import { GridItem, Heading, Paragraph, Box } from '@thepuzzlers/pieces';

export const PrimaryTextBlock = ({ title, text, light, ...props }) => (
  <>
    <GridItem {...props}>
      <Heading
        as='h3'
        type='h3-500'
        sx={{
          color: light ? 'textNegative' : 'teal1000',
          mb: ['12px', '12px', '8px', '8px', '8px', '8px'],
        }}
      >
        {title}
        <Box as='span' sx={{ color: 'secondary' }}>
          .
        </Box>
      </Heading>
      <Paragraph
        as='p'
        type='body-500'
        sx={{ color: light ? 'textNegative' : 'teal1000' }}
      >
        {text}
      </Paragraph>
    </GridItem>
  </>
);
