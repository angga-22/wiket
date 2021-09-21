// external dependencies
import React, { memo } from 'react';
import Lottie from 'react-lottie';

// pieces
import {
  Heading,
  Paragraph,
  GridItem,
  GridWrapper,
  Image,
} from '@thepuzzlers/pieces';

// vectors
import line from 'assets/svg/shape01.svg';
import chatBubble from 'assets/svg/wiket-logogram.svg';

// lottie
import animationData from '../../../lotties/ui_wiket.json';

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
    <GridWrapper as='section'>
      <Headline />
      <Line />
      <Animation options={defaultOptions} />
      <ChatBubble />
      <Body />
    </GridWrapper>
  );
});

export const Headline = () => (
  <Heading
    as='h2'
    type='profileHeading'
    sx={{
      gridColumn: ['1/12', '1/12', '2/21', '1/14', '2/14', '2/14'],
      gridRow: [1, 1, 1, 2, 2, 2],
      pb: ['73px', '41px', '63px', '24px', '24px', 0],
      pt: [0, 0, 0, '54px', '65px', 0],
    }}
  >
    <Heading as='span' type='h2' variant='bold' sx={{ color: 'secondary' }}>
      Focused on small businesses.{' '}
    </Heading>
    Your profile lets everyone know, what you bring to the table.
  </Heading>
);

export const Animation = ({ options }) => (
  <GridItem
    sx={{
      gridRow: [3, 3, 3, '2 / span 3', '2 / span 3', '2 / span 2'],
      gridColumn: ['3/13', '6/13', '15/24', '17/25', '16/22', '17/23'],
      justifySelf: 'end',
      position: 'relative',
      height: [
        '530px',
        '533.32px',
        '512.43px',
        '453.37px',
        '512.11px',
        '619.78px',
      ],
      width: ['263.31px', '263.31px', '253px', '223.84px', '252.84px', '306px'],
      zIndex: 1,
    }}
  >
    <Lottie options={options} height='100%' width='100%' />
  </GridItem>
);

export const Line = () => (
  <GridItem
    sx={{
      justifySelf: [
        'baseline',
        'end',
        'baseline',
        'end',
        'baseline',
        'baseline',
      ],
      gridColumn: ['1/3', '5/7', '14/15', '15/17', '14/16', '16/17'],
      gridRow: [2, 2, 2, 1, 1, 1],
      transform: 'rotate(90deg)',
      mb: [0, 0, 0, '-10px', 0, 0],
      height: ['49.13px', '45.11px', '38px', '35.58px', '45.11px', '45.11px'],
      width: ['48.58px', '46.91px', '39.52px', '37px', '46.91px', '46.91px'],
    }}
  >
    <Image src={line} alt='' />
  </GridItem>
);

export const ChatBubble = () => (
  <GridItem
    sx={{
      alignSelf: [
        'center',
        'baseline',
        'baseline',
        'center',
        'baseline',
        'baseline',
      ],
      gridRow: [3, 3, 3, '2 / span 3', '2 / span 3', '2 / span 3'],
      gridColumn: ['1/3', '5/9', '13/17', '15/19', '14/18', '15/18'],
      justifySelf: ['baseline', 'baseline', 'end', 'end', 'center', 'end'],
      position: 'relative',
      mt: [0, '139px', '139px', 0, '178px', '208px'],
      height: ['111px', '186px', '186px', '146px', '186px', '186px'],
      width: ['76px', '128px', '128px', '100px', '128px', '128px'],
      zIndex: 0,
    }}
  >
    <Image src={chatBubble} alt='' />
  </GridItem>
);

export const Body = () => (
  <Paragraph
    type='profileParagraph'
    sx={{
      alignSelf: ['start', 'end', 'start', 'start', 'start', 'end'],
      gridColumn: ['1/10', '1/6', '2/11', '1/10', '2/8', '11/16'],
      gridRow: [4, 3, 3, 3, 3, 3],
      pt: ['25px', 0, 0, 0, 0, '25px'],
    }}
  >
    Unless other social networks, wiket is created for businesses and the people
    behind them.
  </Paragraph>
);
