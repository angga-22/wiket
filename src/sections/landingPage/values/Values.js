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
    sx={{ minHeight: '100vh', alignItems: 'center', mt: '10vw' }}
  >
    <GridWrapper variant='inside.columns'>
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
      backgroundColor: 'red',
      borderRadius: '24px',
    }}
  />
);

const SectionHeader = () => (
  <GridItem
    sx={{
      gridColumn: [
        '3/span 8',
        '1/span 7',
        '2/span 11',
        '2/span 14',
        '2/span 13',
        '2/span 13',
      ],
      gridRow: '1/span 1',
    }}
  >
    <Heading
      type='valuesH2'
      sx={{
        textAlign: ['center', 'left', 'left', 'left', 'left', 'left'],
        paddingBottom: '1.5em',
      }}
    >
      The place for <br />
      <Heading as span type='valuesH2' variant='bold'>
        like-minded people
      </Heading>
      <span sx={{ color: 'secondary' }}>.</span>
    </Heading>
  </GridItem>
);

const SectionHeaderImg = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1/span 11',
        '8/span 5',
        '13/span 11',
        '17/span 7',
        '16/span 8',
        '16/span 8',
      ],
      gridRow: [2 / 3, 1 / 1, 1 / 1, 1 / 1, 1 / 1, 1 / 1],
      alignSelf: ['start', 'end', 'end', 'start', null, null],
    }}
  >
    <Image src={ThumbsUpImg} />
  </GridItem>
);

const TextBlock = ({ id, text, title, gridColumnStart, gridRow }) => (
  <GridItem
    id={id}
    sx={{
      marginTop: '3em',
      gridColumnStart,
      gridRow,
      gridColumnEnd: [
        'span 9',
        'span 6',
        'span 8',
        'span 7',
        'span 5',
        'span 5',
      ],
    }}
  >
    <Heading variant='bold' type='valuesH4'>
      {title}
      <span sx={{ color: 'secondary' }}>.</span>
    </Heading>
    <Paragraph type='valuesParagraph' marginTop='.5em'>
      {text}
    </Paragraph>
  </GridItem>
);
