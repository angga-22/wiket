import React from 'react';
import { Card } from '@thepuzzlers/pieces';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { CardTextBlock } from '../blocks/CardTextBlock';

export const PrimaryCard = ({ image, title, text, sx, ...props }) => (
  <Card variant='vertical' sx={sx} {...props}>
    <GatsbyImage
      src={getImage(image)}
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
