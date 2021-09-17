// external dependencies
import React, { memo } from 'react';

// pieces
import {
  Box,
  Section,
  Heading,
  Paragraph,
  GridItem,
  srcsetValues,
  Image,
} from '@thepuzzlers/pieces';

// images
// import { StaticImage } from 'gatsby-plugin-image';
import headerMainImage from 'assets/jpg/header-main-img.jpg';
import headerSubImage1 from 'assets/jpg/header-sub-img-1.jpg';
import headerSubImage2 from 'assets/jpg/header-sub-img-2.jpg';
import headerSubImage3 from 'assets/jpg/header-sub-img-3.jpg';
import linePhonePortrait from 'assets/svg/line-phone-portrait.svg';
import linePhoneLandscape from 'assets/svg/line-phone-landscape.svg';
import lineTabletPortrait from 'assets/svg/line-tablet-portrait.svg';
import lineTabletLandscape from 'assets/svg/line-tablet-landscape.svg';
import lineDesktop from 'assets/svg/line-desktop.svg';
import floatingMarker from 'assets/svg/floating-marker.svg';
import floatingCircle from 'assets/svg/floating-circle.svg';

// EXPORT
export const Header = memo(() => (
  <Section
    id='header-section'
    sx={{ mt: ['160px', '175px', '168px', '110px', '135px', '148px'] }}
  >
    <Headline />
    <MainImgContainer />
    <MainImgDescription />
    <PotjectCard />
    <GreenCafeCard />
    <GreenThumbCard />
    <Line />
    <ParagraphBlock />
    <FloatingMarker />
    <FloatingCircle />
  </Section>
));

const Headline = () => (
  <GridItem
    sx={{
      gridColumn: ['1/13', '2/12', '2/22', '13/24', '14/25', '14/24'],
      gridRow: [1, 1, 1, '1/span 2', 1, 1],
    }}
  >
    <Heading type='body-1000' as='p'>
      Explore new opportunities.
    </Heading>
    <Heading type='h1' sx={{ mt: '8px' }}>
      <b>Grow </b>
      your business.
    </Heading>
  </GridItem>
);

const ParagraphBlock = () => (
  <Paragraph
    as='h3'
    type='lead'
    sx={{
      alignSelf: ['end', 'end', 'end', 'center', 'end', 'end'],
      gridColumn: ['1/12', '2/9', '2/14', '6/15', '16/22', '16/21'],
      gridRow: [2, 2, 2, 3, 1, 1],
      transform: [
        null,
        null,
        null,
        null,
        'translateY(-45%)',
        'translateY(-15%)',
      ],
      mt: ['24px', '40px', '24px', 0, 0, 0],
      mb: ['61px', '67px', '61px', 0, 0, 0],
    }}
  >
    <b>Wiket is the first business to business network </b>
    which lets you connect to mind like people.
  </Paragraph>
);

const MainImgContainer = () => (
  <GridItem
    sx={{
      gridColumn: ['1/13', '4/12', '9/22', '3/12', '2/11', '3/11'],
      gridRow: [4, 4, 3, 2, 1, 1],
      height: ['422px', '452px', '495px', '335px', '437px', '551px'],
      mt: ['12px', '12px', 0, '12px', 0, 0],
      width: '100%',
      zIndex: 1,
    }}
  >
    <Image
      src={headerMainImage}
      alt=''
      sx={{
        borderRadius: ['24px', '24px', '24px', '24px', '19.7px', '24px'],
        objectFit: 'cover',
        height: '100%',
        width: '100%',
      }}
    />
  </GridItem>
);

const MainImgDescription = () => (
  <GridItem
    sx={{
      gridColumn: ['1/8', '4/8', '9/16', '3/9', '2/6', '3/7'],
      gridRow: [3, 3, 4, 1, 2, 2],
      mt: ['8px', '8px', '8px', 0, '8px', '16px'],
    }}
  >
    <Heading as='h5' type='h5-500'>
      Hanging Garden
    </Heading>
    <Paragraph as='p' type='body-300'>
      Florist in Bangkok
    </Paragraph>
  </GridItem>
);

const Card = ({ sx, title, description, image, ...props }) => (
  <Box
    sx={{
      bg: 'background',
      borderRadius: '12px',
      boxShadow: 'headerCard',
      justifySelf: ['end', 'center', 'center', 'center', 'center', 'baseline'],
      padding: '12px 12px 18px 12px',
      zIndex: 2,
      ...sx,
    }}
    {...props}
  >
    <Image
      src={image}
      alt=''
      sx={{
        borderRadius: '8px',
        objectFit: 'cover',
        width: '100%',
      }}
    />
    <Heading
      as='h5'
      type='h5-500'
      sx={{
        mt: ['12px', '12px', '12px', '12px', '12px', '18px'],
        mb: ['4px', '4px', '4px', '4px', '4px', '6px'],
      }}
    >
      {title}
    </Heading>
    <Paragraph as='p' type='body-300'>
      {description}
    </Paragraph>
  </Box>
);

const PotjectCard = () => (
  <Card
    sx={{
      gridColumn: ['1/7', '2/6', '19/25', '16/21', '8/12', '9/11'],
      gridRow: [5, 5, 3, 2, 1, 1],
      justifySelf: ['end', 'center', 'center', 'center', 'center', 'baseline'],
      position: 'relative',
      mt: ['-90px', '-100px', '31px', '130px', '22px', '30px'],
      mb: 'auto',
      width: ['145px', '100%', '100%', '100%', '141px', '154px'],
    }}
    image={headerSubImage1}
    title='Potject'
    description='Pottery in Bangkok'
  />
);

const GreenCafeCard = () => (
  <Card
    sx={{
      alignSelf: ['end', 'end', 'end', 'baseline', 'end', 'end'],
      gridColumn: ['1/7', '3/7', '18/24', '18/23', '9/12', '9/12'],
      gridRow: [5, 5, 3, 3, 1, 1],
      justifySelf: [
        'baseline',
        'baseline',
        'baseline',
        'baseline',
        'baseline',
        'end',
      ],
      transform: [
        null,
        'translateY(-23%)',
        'translateY(45%)',
        'translateY(0%)',
        'translateY(14%)',
        'translateY(14%)',
      ],
      width: ['157px', '100%', '100%', '100%', '141px', '154px'],
    }}
    image={headerSubImage3}
    title='Green Cafe'
    description='Roastery in Bangkok'
  />
);

const GreenThumbCard = () => (
  <Card
    sx={{
      gridColumn: ['7/13', '7/11', '5/11', '10/15', '1/4', '2/5'],
      gridRow: [5, 5, 3, 2, 1, 1],
      justifySelf: ['center', null],
      transform: [
        'translateY(15%)',
        'translateY(-20%)',
        'translateY(135%)',
        'translateY(130%)',
        'translateY(70%)',
        'translateY(90%)',
      ],
      mb: 'auto',
      width: ['130px', '100%', '100%', '100%', '160px', '178px'],
    }}
    image={headerSubImage2}
    title='GreenThumb'
    description='Gardener in CheChe'
  />
);

const Line = () => (
  <Box
    as='picture'
    sx={{
      gridColumn: ['1/12', '5/10', '4/12', '12/19', '11/15', '11/16'],
      gridRow: [5, 5, 4, 3, 2, 2],
      justifySelf: [
        'center',
        'center',
        'baseline',
        'baseline',
        'baseline',
        'end',
      ],
      transform: [
        null,
        'translateY(-3%)',
        'translateY(-30%)',
        'translateY(-31%)',
        'translateY(-39%)',
        'translateY(-37%)',
      ],
      height: [
        '416.22px',
        '416.22px',
        '412.81px',
        '416px',
        '338.97px',
        '412.81px',
      ],
      width: ['214.75px', '214.75px', '213.01px', '215px', '176.64px', '223px'],
      zIndex: 0,
    }}
  >
    <source media={srcsetValues[4]} srcSet={lineDesktop} />
    <source media={srcsetValues[3]} srcSet={lineTabletLandscape} />
    <source media={srcsetValues[2]} srcSet={linePhoneLandscape} />
    <source media={srcsetValues[1]} srcSet={lineTabletPortrait} />
    <source media={srcsetValues[0]} srcSet={linePhoneLandscape} />
    <img
      src={linePhonePortrait}
      alt=''
      style={{ width: '100%', maxHeight: '100%' }}
    />
  </Box>
);

const FloatingMarker = () => (
  <GridItem
    sx={{
      display: ['none', 'none', 'block', 'none', 'block', 'block'],
      gridColumn: ['1/2', '1/2', '7/9', '1/2', '1/3', '2/3'],
      gridRow: [0, 0, 3, 0, 1, 1],
      mt: ['75px', '75px', '190px', '75px', '75px', '100px'],
      width: ['31.77px', '31.77px', '38.69px', '31.77px', '31.77px', '38.69px'],
      height: ['43.93px', '43.93px', '53.5px', '43.93px', '43.93px', '53.5px'],
      zIndex: 3,
    }}
  >
    <Image
      src={floatingMarker}
      alt=''
      sx={{ width: '100%', maxHeight: '100%' }}
    />
  </GridItem>
);

const FloatingCircle = () => (
  <GridItem
    sx={{
      alignSelf: 'center',
      gridRow: [5, 4, 3, 2, 1, 1],
      gridColumn: ['3/5', '1/3', '19/23', '12/15', '11/13', '11/12'],
      justifySelf: ['center', 'end', 'end', 'end', 'end', 'baseline'],
      mt: ['-80px', '50px', '210px', '-20px', '50px', '50px'],
      width: ['48px', '60px', '48px', '42px', '39.78px', '48.44px'],
      height: ['41px', '51px', '41px', '36px', '34.17px', '41.61px'],
      zIndex: 3,
    }}
  >
    <Image
      src={floatingCircle}
      alt=''
      sx={{ width: '100%', maxHeight: '100%' }}
    />
  </GridItem>
);
