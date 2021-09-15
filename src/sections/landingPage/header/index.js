// external dependencies
import { memo } from 'react';
// pieces
/** @jsx jsx */
import {
  Section,
  GridItem,
  Paragraph,
  Box,
  Heading,
  srcsetValues,
} from '@thepuzzlers/pieces';
import { StaticImage } from 'gatsby-plugin-image';
import { jsx } from 'theme-ui';
import dotArrowDesktop from 'assets/svg/line-desktop.svg';
import dotArrowTabletLandscape from 'assets/svg/line-tablet-landscape.svg';
import dotArrowPhoneLandscape from 'assets/svg/line-phone-landscape.svg';
import dotArrowTabletPortrait from 'assets/svg/line-tablet-portrait.svg';
import dotArrowDefault from 'assets/svg/line-phone.svg';
import floatingCircle from 'assets/svg/floating-circle2.svg';
import floatingMarker from 'assets/svg/floating-marker.svg';
import CardItem from './components/CardItem';

// EXPORT
export const Header = memo(({ cardData }) => (
  <Section id='header-section' sx={{ mt: '10vw' }}>
    <Headlines />
    <HeaderImage />
    <HeaderImageLabel />
    <FirstCard>
      <CardItem
        label={cardData.firstCard.label}
        location={cardData.firstCard.location}
        image={cardData.firstCard.img}
      />
    </FirstCard>
    <SecondCard>
      <CardItem
        label={cardData.secondCard.label}
        location={cardData.secondCard.location}
        image={cardData.secondCard.img}
      />
    </SecondCard>
    <ThirdCard>
      <CardItem
        label={cardData.thirdCard.label}
        location={cardData.thirdCard.location}
        image={cardData.thirdCard.img}
      />
    </ThirdCard>
    <Info />
    <DotArrow />
    <FloatingCircle />
    <FloatingMarker />
  </Section>
));

// COMPONENTS

const Headlines = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 12',
        '1 / 12',
        '2 / 20',
        '13 / 24',
        '14 /  25',
        '14 / 24',
      ],
      gridRow: [1, 1, 1, '1 / span 2', 1, 1],
      alignSelf: 'start',
    }}
  >
    <Heading
      type='h4'
      sx={{
        color: 'primary',
      }}
    >
      Explore new opportunities.
    </Heading>
    <Heading variant='bold' type='h1' sx={{ mt: '8px', color: 'primary' }}>
      <Box as='span' sx={{ color: 'accentPrimary' }}>
        Grow{' '}
      </Box>
      your business.
    </Heading>
  </GridItem>
);

const HeaderImage = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 13',
        '4 / 13',
        '9 /  22',
        '2 / span 9',
        '2 / span 8',
        '3 / span 8',
      ],
      gridRow: [null, 5, 3, '2 / span 4', '1 / span 4', '1 / span 5'],
      mt: [null, '12px', '60px', '0', '0', '0'],
      alignSelf: [null, null, null, 'start', 'start', 'start'],
      transform: [
        'translateY(0)',
        'translateY(0)',
        'translateY(0)',
        'translateY(0)',
        'translateY(0)',
        'translateY(0)',
      ],
    }}
  >
    <StaticImage
      src='../../../assets/jpg/header-main-img.jpg'
      sx={{
        borderRadius: ['24px', '24px', '24px', '24px', '19px', '24px'],
      }}
    />
  </GridItem>
);

const HeaderImageLabel = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / span 7',
        '4 / span 5',
        '9 /  22',
        '2 / span 6',
        '2 / 6',
        '3 / 8',
      ],
      gridRow: [3, 3, 4, 1, 3, 3],
      transform: [
        'translateY(0)',
        'translateY(0)',
        'translateY(0)',
        'translateY(0)',
        'translateY(0)',
        'translateY(0)',
      ],
      alignSelf: [null, null, null, 'start', 'center', 'end'],
      mb: ['12px', '12px', '0', '20px', '0', '0'],
      mt: ['60px', '60px', '0', '0', '0', '0'],
    }}
  >
    <Paragraph
      type='lead'
      variant='bold'
      sx={{
        color: 'primary',
      }}
    >
      Hanging Garden
    </Paragraph>
    <Paragraph
      type='lead'
      sx={{
        color: 'primary',
        fontWeight: 'lighter',
      }}
    >
      Florist in Bangkok
    </Paragraph>
  </GridItem>
);

const Info = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / span 11',
        '1 / span 7',
        '10 / 19',
        '4 / 15',
        '16 / 23',
        '16 / 22',
      ],
      gridRow: [2, 2, 4, 5, 2, 3],
      alignSelf: [null, null, 'end', 'start', 'end', 'center'],
      mt: ['20px', '24px', '24px', '0', '0', '0'],
      ml: [null, null, null, null, '0', '10px'],
      transform: [
        'translateY(0)',
        'translateY(0)',
        'translateY(100%)',
        'translateY(0)',
        'translateY(10%)',
        'translateY(0)',
      ],
    }}
  >
    <Paragraph
      type='paragraph'
      sx={{
        color: 'primary',
      }}
    >
      <span sx={{ fontWeight: '700' }}>
        Wiket is the first business to business network
      </span>
      which lets you connect to mind like people.
    </Paragraph>
  </GridItem>
);

const DotArrow = () => (
  <GridItem
    sx={{
      gridColumn: [4, 5, 4, '11 / 15', '10 / 16', '12 / 16'],
      gridRow: [5, 6, '3 / span 4', 'span 3 / 6', '3 / span 3', '3 / span 3'],
      ml: [null, null, null, '0', '0', '-18px'],
      alignSelf: [null, null, 'center', 'end', 'start', 'start'],
      position: 'relative',
      transform: [
        'translateY(2%)',
        'translateY(-37%)',
        'translateY(59%)',
        'translateY(-4%)',
        'translateY(-27%)',
        'translateY(-6%)',
      ],
    }}
  >
    <picture>
      <source media={srcsetValues[4]} srcSet={dotArrowDesktop} />
      <source media={srcsetValues[3]} srcSet={dotArrowTabletLandscape} />
      <source media={srcsetValues[2]} srcSet={dotArrowPhoneLandscape} />
      <source media={srcsetValues[1]} srcSet={dotArrowTabletPortrait} />
      <source media={srcsetValues[0]} srcSet={dotArrowPhoneLandscape} />
      <img src={dotArrowDefault} alt='dot-arrow' />
    </picture>
  </GridItem>
);

const FloatingCircle = () => (
  <GridItem
    sx={{
      gridColumn: [
        '3 / 5',
        '2 / 4',
        '21 / 23',
        '13 / span 14',
        '11 / 13',
        '12 / 13',
      ],
      alignSelf: ['center', 'center', 'center', 'start', 'start', 'start'],
      display: ['block', 'block', 'block', 'none', 'block', 'block'],
      gridRow: [5, 5, 3, 3, 2, 2],
      transform: [
        'translateY(-100%)',
        'translateY(70%)',
        'translateY(200%)',
        'translateY(100%)',
        'translateY(40%)',
        'translateY(50%)',
      ],
    }}
  >
    <picture>
      <source srcSet={floatingCircle} />
      <img src={floatingCircle} alt='batik-shape' />
    </picture>
  </GridItem>
);

const FloatingMarker = () => (
  <GridItem
    sx={{
      gridColumn: [4, 4, '6 / span 7', null, '1 / 2', '2 / 3'],
      gridRow: [5, 5, 3, 3, 1, 1],
      alignSelf: [null, null, 'start', null, 'center', 'center'],
      position: 'relative',
      zIndex: ['-1', '-1', '1', '-1', '1', '1'],
      transform: [
        'translateY(0)',
        'translateY(5%)',
        'translateY(200%)',
        'translateY(0)',
        'translateY(-30%)',
        'translateY(0)',
      ],
    }}
  >
    <picture>
      <source srcSet={floatingMarker} />
      <img src={floatingMarker} alt='batik-shape' />
    </picture>
  </GridItem>
);

// CARD COMPONENT

// first card

const FirstCard = ({ children }) => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 7',
        '2 / 7',
        '19 / 25',
        '15 / 21',
        ' 8 /  12',
        '9 /  13',
      ],
      gridRow: [5, 6, 3, 3, 1, 1],
      alignSelf: [null, null, null, 'center', 'center', 'center'],
      height: [null, null, 'auto', '276px', 'auto', 'auto'],
      width: [null, '90%', '100%', '95%', '100%', '78%'],
      ml: ['7%', '0', '0', '0', '0', '0'],
      position: 'relative',
      borderRadius: '12px',
      zIndex: '1',
      transform: [
        'translateY(-24%)',
        'translateY(-40%)',
        'translateY(17%)',
        'translateY(15%)',
        'translateY(5%)',
        'translateY(0)',
      ],
    }}
  >
    {children}
  </GridItem>
);

// second card

const SecondCard = ({ children }) => (
  <GridItem
    sx={{
      gridColumn: ['7 / 13', '7 / 12', '7 / 13', '8 / 14', '1 / 5', '1 / 5'],
      gridRow: [5, 6, 3, 3, 2, 2],
      width: ['87%', '87%', '95%', '88%', '95%', '80%'],
      alignSelf: [null, null, 'end', 'end', 'center', 'center'],
      ml: ['7%', '7%', '0', '0', '0', '14%'],
      position: 'relative',
      zIndex: '1',
      transform: [
        'translateY(10%)',
        'translateY(-28%)',
        'translateY(-50%)',
        'translateY(40%)',
        'translateY(-40%)',
        'translateY(-50%)',
      ],
    }}
  >
    {children}
  </GridItem>
);

const ThirdCard = ({ children }) => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 7',
        '3 / 7',
        '18 / 24',
        '17 / 24',
        ' 7 / 12',
        ' 9 / 13',
      ],
      gridRow: [5, 6, 4, 4, 3, 3],
      position: 'relative',
      zIndex: '1',
      width: [null, '95%', '100%', '93%', '85%', '90%'],
      transform: [
        'translateY(0)',
        'translateY(-25%)',
        'translateY(-70%)',
        'translateY(0)',
        'translateY(-37%)',
        'translateY(-17%)',
      ],
      alignSelf: ['end', 'center', 'start', 'start', 'center', 'start'],
    }}
  >
    {children}
  </GridItem>
);
