import React from 'react';
import PropTypes from 'prop-types';
import {
  GridItem,
  Section,
  Box,
  Heading,
  Paragraph,
  Label,
  Link,
} from '@thepuzzlers/pieces';

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
      <Heading type='h1'>{text || 'Hello World H1'}</Heading>
      <Heading type='h1'>{text || 'Hello World H1'}</Heading>
      <Heading type='h2'>{text || 'Hello World H2'}</Heading>
      <Heading type='h3'>{text || 'Hello World H3'}</Heading>
      <Heading type='h4'>{text || 'Hello World H4'}</Heading>
      <Heading type='h5'>{text || 'Hello World H5'}</Heading>
      <Heading type='h6'>{text || 'Hello World H6'}</Heading>
      <Label type='loud'>{text || 'Loud Label'}</Label>
      <Label>{text || 'Label'}</Label>
      <Label type='quiet'>{text || 'Quiet Label'}</Label>
      <Box>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>{text || 'Link'}</Link>
      </Box>
      <Box>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link variant='navigation'>{text || 'NavigationLink'}</Link>
      </Box>
      <Box>
        <Paragraph type='button'>{text || 'Button Typography'}</Paragraph>
      </Box>
      <Box>
        <Paragraph type='buttonLarge'>
          {text || 'Large Button Typography'}
        </Paragraph>
      </Box>
      <Paragraph>
        {paragraph ||
          // eslint-disable-next-line max-len
          'Paragraph - Muffin marzipan marshmallow oat cake brownie dragée. I love chocolate bar I love I love lollipop bear claw. Dessert gingerbread jelly-o. Donut chocolate jelly beans.'}
      </Paragraph>
      <Paragraph type='small'>
        {paragraph ||
          // eslint-disable-next-line max-len
          'Small Paragraph - Muffin marzipan marshmallow oat cake brownie dragée. I love chocolate bar I love I love lollipop bear claw. Dessert gingerbread jelly-o. Donut chocolate jelly beans.'}
      </Paragraph>
      <Paragraph variant='bold'>
        {paragraph ||
          // eslint-disable-next-line max-len
          'Bold Paragraph - Muffin marzipan marshmallow oat cake brownie dragée. I love chocolate bar I love I love lollipop bear claw. Dessert gingerbread jelly-o. Donut chocolate jelly beans.'}
      </Paragraph>
      <Paragraph type='small' variant='bold'>
        {paragraph ||
          // eslint-disable-next-line max-len
          'Bold, small Paragraph - Muffin marzipan marshmallow oat cake brownie dragée. I love chocolate bar I love I love lollipop bear claw. Dessert gingerbread jelly-o. Donut chocolate jelly beans.'}
      </Paragraph>
      {children}
    </GridItem>
  </Section>
);

TypographyTestBlock.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  paragraph: PropTypes.string,
};

TypographyTestBlock.defaultProps = {
  text: null,
  paragraph: null,
};
