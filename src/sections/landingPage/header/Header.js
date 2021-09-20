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
    sx={{
      mt: ['160px', '175px', '168px', '110px', '135px', '148px'],
      gridTemplateRows: [
        'auto',
        'auto auto auto auto 81px',
        'auto',
        'auto',
        'auto',
        'auto',
      ],
    }}
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
      gridColumn: ['1/13', '1/11', '2/22', '13/24', '14/25', '14/24'],
      gridRow: [1, 1, 1, '1/span 2', 1, 1],
      mb: [null, null, '60px'],
    }}
  >
    <Heading type='body-1000' as='p'>
      Explore new opportunities.
    </Heading>
    <Heading type='h1' sx={{ mt: ['4px', '4px', '4px', '4px', '12px', '4px'] }}>
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
      gridColumn: ['1/12', '1/8', '10/20', '6/15', '16/22', '16/21'],
      gridRow: [2, 2, 5, 3, 1, 1],
      transform: [
        null,
        null,
        null,
        null,
        'translateY(-45%)',
        'translateY(-15%)',
      ],
      mt: ['20px', '24x', 0, 0, 0, 0],
      mb: ['80px', '60px', 0, 0, 0, 0],
    }}
  >
    <b>Wiket is the first business to business network </b>
    which lets you connect to mind like people.
  </Paragraph>
);

const MainImgContainer = () => (
  <Image
    src={headerMainImage}
    alt=''
    sx={{
      gridColumn: ['1/13', '4/12', '9/22', '3/12', '2/11', '3/11'],
      gridRow: [4, '4/6', '2/5', 2, 1, 1],
      borderRadius: ['24px', '24px', '24px', '24px', '19.7px', '24px'],
      objectFit: 'contain',
      width: '100%',
    }}
  />
);

const MainImgDescription = () => (
  <GridItem
    sx={{
      gridColumn: ['1/8', '4/8', '9/16', '3/9', '2/6', '3/7'],
      gridRow: [3, 3, 5, 1, 2, 2],
      mt: ['8px', '8px', '8px', 0, '8px', '16px'],
      mb: ['12px', '12px', 0, '12px', 0, 0],
    }}
  >
    <Heading
      as='h5'
      type='h5-500'
      sx={{ mb: ['4px', '4px', '4px', '4px', '4px', '6px'] }}
    >
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
      borderRadius: 'headerCard',
      boxShadow: 'headerCard',
      padding: '12px 12px 18px 12px',
      alignSelf: 'start', // makes sure card is only as high as its content
      zIndex: 2,
      ...sx,
    }}
    {...props}
  >
    <Image
      src={image}
      alt=''
      sx={{
        borderRadius: 'headerCardImage',
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
      gridColumn: ['1/7', '2/7', '18/25', '16/21', '8/12', '9/11'],
      gridRow: [5, 5, 2, 2, 1, 1],
      justifySelf: ['end', 'start', 'end', 'center', 'center', 'baseline'],
      alignSelf: ['start', 'start', 'start', 'start', 'start', 'start'],
      width: ['92%', '90%', '88%', 'auto', 'auto', 'auto'],
      mt: [null, null, null, '130px', '22px', '30px'],
      transform: [
        'translateY(-50%)',
        'translateY(-42%)',
        'translateY(12%)',
        'initial',
        'initial',
        'initial',
      ],
    }}
    image={headerSubImage1}
    title='Potject'
    description='Pottery in Bangkok'
  />
);

const GreenCafeCard = () => (
  <Card
    sx={{
      gridColumn: ['1/7', '3/7', '7/13', '18/23', '9/12', '9/12'],
      gridRow: [5, 6, 3, 3, 1, 1],
      width: ['auto', 'auto', '95%', 'auto', 'auto', 'auto'],
      alignSelf: ['end', 'end', 'start', 'baseline', 'end', 'end'],
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
        null,
        'initial',
        'translateY(0%)',
        'translateY(14%)',
        'translateY(14%)',
      ],
    }}
    image={headerSubImage3}
    title='Green Cafe'
    description='Roastery in Bangkok'
  />
);

const GreenThumbCard = () => (
  <Card
    sx={{
      gridColumn: ['7/13', '7/12', '17/25', '10/15', '1/4', '2/5'],
      gridRow: [5, 6, 5, 2, 1, 1],
      width: ['87%', '83%', '83%', 'auto', 'auto', 'auto'],
      justifySelf: ['center', 'center', 'center', null, null, null],
      transform: [
        'translateY(15%)',
        'translateY(-50%)',
        'translateY(-50%)',
        'translateY(130%)',
        'translateY(70%)',
        'translateY(90%)',
      ],
    }}
    image={headerSubImage2}
    title='GreenThumb'
    description='Gardener in Ratchaburi'
  />
);

const Line = () => (
  <Box
    as='picture'
    sx={{
      gridColumn: ['3/11', '5/10', '4/span 8', '12/19', '11/15', '11/16'],
      gridRow: ['5', '5/7', '3/6', 3, 2, 2],
      width: ['auto', 'auto', '95%', 'auto', 'auto', 'auto'],
      mb: ['-15px', '-43px', 0, 0, 0, 0], // affects the height of the row
      transform: [
        // leaves height of row unaltered
        'initial',
        'initial',
        // 'translateY(33px)',
        'initial',
        'initial',
        'initial',
        'initial',
      ],
      justifySelf: ['auto', 'center', 'left', 'baseline', 'baseline', 'end'],
      alignSelf: [null, 'end', 'end', null, null, null],
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
      gridColumn: [null, null, '6/8', null, '1/3', '2/3'],
      gridRow: [null, null, 2, null, 1, 1],
      mt: [null, null, '42px', null, '75px', '100px'],
      width: [null, null, 'auto', null, 'auto', 'auto'],
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
      gridColumn: ['3/5', '1/3', '20/23', '12/15', '11/13', '11/12'],
      justifySelf: ['center', 'end', 'end', 'end', 'end', 'baseline'],
      mt: ['-80px', '50px', 0, '-20px', '50px', '50px'],
      width: ['auto', 'auto', '82%', 'auto', 'auto', 'auto'],
      zIndex: 1,
    }}
  >
    <Image
      src={floatingCircle}
      alt=''
      sx={{ width: '100%', maxHeight: '100%' }}
    />
  </GridItem>
);
