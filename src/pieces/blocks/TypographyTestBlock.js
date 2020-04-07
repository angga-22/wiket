import React from 'react';
import { GridItem } from 'pieces/grid';
import { Section } from 'pieces/layout';
import {
  Heading,
  Paragraph,
  Label,
  Link,
  Button as ButtonTypography,
  LargeButton as LargeButtonTypography,
} from 'pieces/typography';
import { Box } from 'pieces/box';

export const TypographyTestBlock = ({ text, paragraph, children }) => (
  <Section>
    <GridItem
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gridColumnStart: ['1', '1', '2', '4', '7'],
        gridColumnEnd: ['13', '13', '24', '22', '19'],
      }}
    >
      <Heading type='h1'>{text || 'H1'}</Heading>
      <Heading type='h2'>{text || 'H2'}</Heading>
      <Heading type='h3'>{text || 'H3'}</Heading>
      <Heading type='h4'>{text || 'H4'}</Heading>
      <Heading type='h5'>{text || 'H5'}</Heading>
      <Heading type='h6'>{text || 'H6'}</Heading>
      <Label type='loud'>{text || 'Loud Label'}</Label>
      <Label>{text || 'Label'}</Label>
      <Label type='quiet'>{text || 'Quiet Label'}</Label>
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
        <LargeButtonTypography>
          {text || 'Large Button Typography'}
        </LargeButtonTypography>
      </Box>
      <Paragraph type='loud'>
        {paragraph
          // eslint-disable-next-line max-len
          || 'Loud Paragraph - Muffin marzipan marshmallow oat cake brownie dragée. I love chocolate bar I love I love lollipop bear claw. Dessert gingerbread jelly-o. Donut chocolate jelly beans.'}
      </Paragraph>
      <Paragraph>
        {paragraph
          // eslint-disable-next-line max-len
          || 'Paragraph - Muffin marzipan marshmallow oat cake brownie dragée. I love chocolate bar I love I love lollipop bear claw. Dessert gingerbread jelly-o. Donut chocolate jelly beans.'}
      </Paragraph>
      <Paragraph type='quiet'>
        {paragraph
          // eslint-disable-next-line max-len
          || 'Quiet Paragraph - Muffin marzipan marshmallow oat cake brownie dragée. I love chocolate bar I love I love lollipop bear claw. Dessert gingerbread jelly-o. Donut chocolate jelly beans.'}
      </Paragraph>
      <Paragraph variant='bold'>
        {paragraph
          // eslint-disable-next-line max-len
          || 'Bold Paragraph - Muffin marzipan marshmallow oat cake brownie dragée. I love chocolate bar I love I love lollipop bear claw. Dessert gingerbread jelly-o. Donut chocolate jelly beans.'}
      </Paragraph>
      {children}
    </GridItem>
  </Section>
);