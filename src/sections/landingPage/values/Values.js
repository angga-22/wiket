/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { memo } from 'react';

import ThumbsUpImg from 'assets/svg/Group 67.svg';

// pieces
import {
  Section,
  GridWrapper,
  Heading,
  Paragraph,
  GridItem,
} from '@thepuzzlers/pieces';
import valuesTexts from '../../../data/values.json';

export const Values = memo(() => (
  <Section
    id='values-section'
    sx={{
      minHeight: '100vh',
      alignItems: 'center',
    }}
  >
    <GridWrapper
      variant='inside.columns'
      sx={{ '.valuesTextBlock:last-of-type': { paddingBottom: '7em' } }}
    >
      <Background />
      <SectionHeader />
      <SectionHeaderImg />
      {valuesTexts.map((value) => (
        <TextBlock
          key={value.id}
          title={value.title}
          text={value.text}
          gridColumnStart={value.gridColumnStart}
          gridRow={value.gridRow}
        />
      ))}
    </GridWrapper>
  </Section>
));

const Background = () => (
  <GridItem
    sx={{
      gridColumn: ['-1/1'],
      gridRow: ['1/6'],
      backgroundColor: 'primary',
      borderRadius: '24px',
    }}
  />
);

const SectionHeader = () => (
  <GridItem
    sx={{
      gridColumn: [
        '3/span 8',
        '2/span 7',
        '3/span 11',
        '3/span 14',
        '3/span 13',
        '3/span 13',
      ],
      gridRow: '1/span 1',
      paddingTop: ['3.5em', '3.5em', '3.5em', '3.5em', '6em', '7em'],
    }}
  >
    <Heading
      as='h2'
      type='sectionHeadingValues'
      sx={{
        textAlign: ['center', 'left', 'left', 'left', 'left', 'left'],
      }}
    >
      The place for <br />
      <Heading
        as='span'
        type='sectionHeadingValues'
        sx={{
          textAlign: ['center', 'left', 'left', 'left', 'left', 'left'],
        }}
        variant='bold'
      >
        like-minded people
      </Heading>
      <span sx={{ color: 'secondary' }}>.</span>
    </Heading>
  </GridItem>
);

const SectionHeaderImg = () => (
  <GridItem
    sx={{
      paddingTop: ['4em', '7em', '9em', '2em', '6em', '6em'],
      gridColumn: [
        '1/span 11',
        '7/span 5',
        '12/span 11',
        '13/span 10',
        '16/span 8',
        '16/span 7',
      ],
      gridRow: ['2 / 3', '1 / 1', '1 / 1', '3 / 4', '1 / 1', '1 / 1'],
      alignSelf: ['start', 'end', 'end', 'start', 'end', 'end'],
    }}
  >
    <Image src={ThumbsUpImg} />
  </GridItem>
);

const TextBlock = ({ id, text, title, gridColumnStart, gridRow }) => (
  <GridItem
    className='valuesTextBlock'
    id={id}
    sx={{
      marginTop: '3em',
      gridColumnStart,
      gridRow,
      gridColumnEnd: [
        'span 9',
        'span 7',
        'span 12',
        'span 8',
        'span 6',
        'span 5',
      ],
    }}
  >
    <Heading variant='bold' type='titleHeadingValues'>
      {title}
      <span sx={{ color: 'secondary' }}>.</span>
    </Heading>
    <Paragraph type='textParagraphValues' marginTop='.5em'>
      {text}
    </Paragraph>
  </GridItem>
);
