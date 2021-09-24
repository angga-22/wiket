// external dependencies
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { memo } from 'react';
import Lottie from 'react-lottie';

// pieces
import {
  Heading,
  Paragraph,
  GridItem,
  Section,
  Image,
} from '@thepuzzlers/pieces';

// vectors
import line from 'assets/svg/shape01.svg';
import chatBubble from 'assets/svg/wiket-logogram.svg';
import pin from 'assets/svg/pin.svg';
import arrow from 'assets/svg/arrow.svg';
import tShape from 'assets/svg/tShape.svg';
import outline from 'assets/svg/outline.svg';

// lottie
import animationData from '../../../lotties/wiket-walkthrough-app.json';

export const Profile = memo(() => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Section
      id='profile'
      sx={{
        paddingTop: ['120px', '120px', '120px', '120px', '120px', '120px'],
      }}
    >
      <Headline />
      <Line />
      <Animation options={defaultOptions} />
      <ChatBubble />
      <Body />
      <Pin />
      <Tshape />
      <Outline />
      <Arrow />
    </Section>
  );
});

export const Headline = () => (
  <Heading
    as='h2'
    type='h2-500'
    sx={{
      gridColumn: ['1/12', '1/12', '2/21', '1/14', '2/13', '3/14'],
      gridRow: [1, 1, 1, 2, 2, 2],
      pb: ['73px', '41px', '63px', '24px', '24px', 0],
      pt: [0, 0, 0, 0, 0, 0],
    }}
  >
    <span>Focused on small businesses. </span>
    Your profile lets everyone know, what you bring to the table.
  </Heading>
);

export const Animation = ({ options }) => (
  <GridItem
    sx={{
      gridRow: [
        '3/ span 1',
        '3/ span 1',
        '3/ span 1',
        '2 / span 3',
        '2 / span 3',
        '2 / span 2',
      ],
      gridColumn: [
        '3/span 10',
        '7/span 6',
        '15/span 9',
        '17/span 8',
        '17/span 6',
        '17/span 6',
      ],
      height: [
        '530px',
        '533.32px',
        '512.43px',
        '453.37px',
        '512.11px',
        '619.78px',
      ],
      zIndex: 1,
    }}
  >
    <Lottie options={options} height='100%' />
  </GridItem>
);

export const Line = () => (
  <GridItem
    sx={{
      justifySelf: [
        'baseline',
        'start',
        'baseline',
        'baseline',
        'baseline',
        'end',
      ],
      gridColumn: [
        '1/span 2',
        '6/span 2',
        '14/span 2',
        '16/span 2',
        '16/span 1',
        '16/span 1',
      ],
      gridRow: [2, 2, 2, 1, 1, 1],
      transform: 'rotate(90deg)',
    }}
  >
    <Image src={line} alt='' />
  </GridItem>
);

export const ChatBubble = () => (
  <GridItem
    sx={{
      alignSelf: ['center', 'end', 'center', 'end', 'end', 'end'],
      gridRow: [
        '3/span 1',
        '3/span 1',
        '3/span 1',
        '2/span 1',
        '2/span 1',
        '2/span 1',
      ],
      gridColumn: [
        '1/span 4',
        '5/span 4',
        '13/span 5',
        '15/span 4',
        '15/span 4',
        '15/span 3',
      ],
      width: ['75%', '75%', '90%', '90%', '80%', '85%'],
      transform: [
        '0%',
        'translateY(35%)',
        'translateY(-10%)',
        'translateY(20%)',
        'translateY(20%)',
        ['translateY(-20%)', 'translateX(15%)'],
      ],
      zIndex: 0,
    }}
  >
    <Image src={chatBubble} alt='' />
  </GridItem>
);

export const Body = () => (
  <Paragraph
    as='p'
    type='body-500'
    sx={{
      alignSelf: ['start', 'center', 'end', 'end', 'start', 'start'],
      gridColumn: [
        '1/span 11',
        '1/span 5',
        '2/span 9',
        '6/span 9',
        '8/span 7',
        '10/span 5',
      ],
      gridRow: [4, 3, 3, 3, 3, 3],
      pt: ['25px', 0, 0, '5em', '3em', '25px'],
      pb: [0, 0, '2em', 0, 0, 0],
    }}
  >
    Unlike other social networks, wiket is{' '}
    <Paragraph as='span' variant='bold'>
      crafted for small businesses
    </Paragraph>{' '}
    and the people behind them.
  </Paragraph>
);

export const Arrow = () => (
  <GridItem
    sx={{
      gridRow: ['6/span 1', '5/span 1'],
      gridColumn: [
        '4/span 3',
        '4/span 2',
        '6/span 3',
        '7/span 3',
        '9/span 2',
        '10/span 2',
      ],
      paddingTop: ['2em', '12em', '1.5em', '1.5em', '1.5em', '1.5em'],
    }}
  >
    <Image src={arrow} alt='' />
  </GridItem>
);

export const Outline = () => (
  <GridItem
    sx={{
      gridRow: [
        '5/span 1',
        '4/span 1',
        '4/span 1',
        '4/span 1',
        '4/span 1',
        '3/span 1',
      ],
      gridColumn: [
        '8/span 2',
        '7/span 2',
        '10/span 2',
        '11/span 2',
        '12/span 1',
        '13/span 1',
      ],
      paddingTop: ['5em', '9em', '8em', '3.5em', '3.5em', '10em'],
    }}
  >
    <Image src={outline} alt='' />
  </GridItem>
);

export const Pin = () => (
  <GridItem
    sx={{
      display: ['none', 'none', 'none', 'none', 'none', 'block'],
      gridRow: [3],
      gridColumn: [null, null, null, null, null, '7/ span 1'],
    }}
  >
    <Image src={pin} alt='' />
  </GridItem>
);

export const Tshape = () => (
  <GridItem
    sx={{
      display: ['none', 'none', 'block', 'none', 'none', 'none'],
      gridRow: [3],
      gridColumn: [null, null, '5/span 3', null, null, null],
      paddingTop: '4em',
      width: '85%',
    }}
  >
    <Image src={tShape} alt='' />
  </GridItem>
);
