import React from 'react';
import { GridItem } from 'pieces/grid';
import { Section } from 'pieces/layout';
import {
  Heading,
  Paragraph,
  SmallParagraph,
  Label,
  Link,
  Button as ButtonTypography,
} from 'pieces/typography';
import { Box } from 'pieces/box';

export const TypographyTestBlock = ({ text, paragraph, children }) => (
  <Section>
    <GridItem
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gridColumnStart: ['1', '1', '2', '4', '7'],
        gridColumnEnd: ['13', '13', '24', '22', '19'],
      }}
    >
      <Heading as='h1'>{text || 'H1'}</Heading>
      <Heading as='h2'>{text || 'H2'}</Heading>
      <Heading as='h3'>{text || 'H3'}</Heading>
      <Heading as='h4'>{text || 'H4'}</Heading>
      <Heading as='h5'>{text || 'H5'}</Heading>
      <Heading as='h6'>{text || 'H6'}</Heading>
      <Label>{text || 'Label'}</Label>
      <Box>
        <Link>{text || 'Link'}</Link>
      </Box>
      <Box>
        <Link variant='navigation'>{text || 'NavigationLink'}</Link>
      </Box>
      <Box>
        <ButtonTypography>{text || 'Button Typography'}</ButtonTypography>
      </Box>
      <Box>
        <ButtonTypography>{text || 'Large Button Typography'}</ButtonTypography>
      </Box>
      <Paragraph>
        {paragraph
          // eslint-disable-next-line max-len
          || 'Muffin marzipan marshmallow oat cake brownie dragée. I love chocolate bar I love I love lollipop bear claw. Dessert gingerbread jelly-o. Donut chocolate jelly beans.'}
      </Paragraph>
      <SmallParagraph>
        {paragraph
          // eslint-disable-next-line max-len
          || 'Muffin marzipan marshmallow oat cake brownie dragée. I love chocolate bar I love I love lollipop bear claw. Dessert gingerbread jelly-o. Donut chocolate jelly beans.'}
      </SmallParagraph>
      {children}
    </GridItem>
  </Section>
);
