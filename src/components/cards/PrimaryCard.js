// external dependencies
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
// import React from 'react';
import { Card } from '@thepuzzlers/pieces';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { CardTextBlock } from '../blocks/CardTextBlock';

export const PrimaryCard = ({ image, title, text, sx, cardRef, ...props }) => (
  <Card variant='vertical' sx={sx} {...props} ref={cardRef}>
    <GatsbyImage
      image={getImage(image)}
      alt=''
      sx={{
        borderRadius: 'headerCardImage',
        objectFit: 'cover',
        width: '100%',
      }}
    />
    <CardTextBlock title={title} text={text} />
  </Card>
);
