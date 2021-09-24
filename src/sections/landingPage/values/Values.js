/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { memo } from 'react';
import Lottie from 'react-lottie';

// pieces
import { Section, Heading, GridItem } from '@thepuzzlers/pieces';

// Local components
import { PrimaryTextBlock } from 'components/blocks/PrimaryTextBlock';

// Data
// import ThumbsUpImg from 'assets/svg/Group 67.svg';
import valuesTexts from '../../../data/values.json';

// lottie
import animationData from '../../../lotties/wiket-thumbs-up.json';

export const Values = memo(() => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Section
      id='values-section'
      sx={{ '.valuesTextBlock:last-of-type': { paddingBottom: '7em' } }}
    >
      <Background />
      <SectionHeader />
      <SectionHeaderImg options={defaultOptions} />
      {valuesTexts.map((value) => (
        <TextBlock
          key={value.id}
          title={value.title}
          text={value.text}
          gridColumnStart={value.gridColumnStart}
          gridRow={value.gridRow}
        />
      ))}
    </Section>
  );
});

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
      type='h2-500'
      sx={{
        color: 'textNegative',
        '&>span': {
          color: 'textNegative',
        },
        textAlign: ['center', 'left', 'left', 'left', 'left', 'left'],
      }}
    >
      The place for <br />
      <span>like-minded people</span>
      <span sx={{ color: 'secondary' }}>.</span>
    </Heading>
  </GridItem>
);

const SectionHeaderImg = ({ options }) => (
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
    <Lottie options={options} height='100%' />
  </GridItem>
);

const TextBlock = ({ id, text, title, gridColumnStart, gridRow }) => (
  <PrimaryTextBlock
    light
    className='valuesTextBlock'
    id={id}
    title={title}
    text={text}
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
  />
);
