// external dependencies
import React, { memo, useEffect } from 'react';

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// pieces
import {
  Box,
  Heading,
  Paragraph,
  GridWrapper,
  Image,
  Card,
} from '@thepuzzlers/pieces';

// svgs
import greenPointer from 'assets/svg/pin.svg';
import logo from 'assets/svg/wiket-logo.svg';
import floatingCircle from 'assets/svg/floating-circle-green.svg';

// card images
import imgThree from 'assets/jpg/header-sub-img-3.jpg';
import imgTwo from 'assets/jpg/connections-card-2.jpg';
import imgOne from 'assets/jpg/header-sub-img-1.jpg';
import imgFour from 'assets/jpg/connections-card-4.jpg';

gsap.registerPlugin(ScrollTrigger);

export const Connections = memo(() => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect');
    // gsap.utils.toArray('.animate-section').forEach((section) => {
    //   gsap.from(section, {
    //     autoAlpha: 0.5,
    //     duration: 1.5,
    //     scrollTrigger: {
    //       trigger: section,
    //       pin: true,
    //       start: 'top top',
    //       end: '+=500',
    //     },
    //   });
    // });
  }, []);

  return (
    <section>
      <GridWrapper
        sx={{ mt: ['360px', '584px', '390px', '237px', '262px', '178px'] }}
      >
        <Headline />
      </GridWrapper>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </section>
  );
});

/* ------------------------------------------------------- */
/* -------------------- Main Headline -------------------- */
/* ------------------------------------------------------- */

const Headline = () => (
  <Heading
    as='h2'
    type='connectionsHeading'
    sx={{
      color: 'greenText',
      gridColumn: ['1/13', '1/10', '1/16', '1/19', '1/16', '2/13'],
    }}
  >
    <Box as='span' sx={{ fontFamily: 'spoof-bold' }}>
      Build strong connections.{' '}
    </Box>
    <br />
    Right from the App.
  </Heading>
);

/* -------------------------------------------------------- */
/* --------------------- Vectors svgs --------------------- */
/* -------------------------------------------------------- */

const GreenPointerVector = ({ sx }) => (
  <Box
    sx={{
      position: 'relative',
      height: ['58px', '76px', '54px', '54px', '65px', '123px'],
      width: ['49px', '64px', '46px', '46px', '55px', '105px'],
      zIndex: 0,
      ...sx,
    }}
  >
    <Image src={greenPointer} alt='' />
  </Box>
);

const FloatingCircleVector = ({ sx }) => (
  <Box
    sx={{
      position: 'relative',
      height: ['65px'],
      width: ['76px'],
      zIndex: 0,
      ...sx,
    }}
  >
    <Image src={floatingCircle} alt='' />
  </Box>
);

const LogoVector = ({ sx }) => (
  <Box
    sx={{
      position: 'relative',
      height: ['111px'],
      width: ['76px'],
      zIndex: 0,
      ...sx,
    }}
  >
    <Image src={logo} alt='' />
  </Box>
);

/* ------------------------------------------------------- */
/* ------------------- Sections Number ------------------- */
/* ------------------------------------------------------- */

const Number = ({ number, sx }) => (
  <Heading
    as='h2'
    type='connectionsNumber'
    sx={{
      fontFamily: 'spoof-bold',
      color: 'accentPrimary',
      ...sx,
    }}
  >
    {number}
  </Heading>
);

/* ------------------------------------------------------- */
/* ------------------ Sections Headings ------------------ */
/* ------------------------------------------------------- */

const FirstSectionHeading = () => (
  <Heading
    as='h2'
    type='connectionsSectionHeading'
    sx={{
      color: 'greenText',
      gridColumn: ['1/11', '3/10', '13/25', '15/25', '16/24', '16/24'],
      gridRow: [5, 3, 3, 2, 2, 2],
      mt: ['43px', '64px', '43px', '81px', '40px', '52px'],
    }}
  >
    Start by{' '}
    <Box as='span' sx={{ fontFamily: 'spoof-bold', color: 'accentPrimary' }}>
      connecting{' '}
    </Box>
    with your current business partners.
  </Heading>
);

const SecondSectionHeading = () => (
  <Heading
    as='h2'
    type='connectionsSectionHeading'
    sx={{
      color: 'greenText',
      gridColumn: ['1/10'],
      gridRow: [4],
      mt: ['14px'],
    }}
  >
    See interesting connection your{' '}
    <Box as='span' sx={{ fontFamily: 'spoof-bold', color: 'accentPrimary' }}>
      partners already have.
    </Box>
  </Heading>
);

const ThirdSectionHeading = () => (
  <Heading
    as='h2'
    type='connectionsSectionHeading'
    sx={{
      color: 'greenText',
      gridColumn: ['1/10'],
      gridRow: [4],
      mt: ['38px'],
    }}
  >
    Connect with{' '}
    <Box as='span' sx={{ fontFamily: 'spoof-bold', color: 'accentPrimary' }}>
      new businesses{' '}
    </Box>
    through your partners.
  </Heading>
);

/* ------------------------------------------------------- */
/* ------------------------ Cards ------------------------ */
/* ------------------------------------------------------- */

const CardImgAndTextVertical = ({ image, title, text }) => (
  <>
    <Image src={image} sx={{ borderRadius: 'input' }} />
    <Heading
      as='h5'
      type='cardsSmallHeading'
      sx={{
        color: 'greenText',
        fontFamily: 'body.bold',
        mt: '12px',
        mb: '4px',
      }}
    >
      {title}
    </Heading>
    <Paragraph type='cardsParagraph' sx={{ color: 'greenText' }}>
      {text}
    </Paragraph>
  </>
);

/* ------------------------ Cards ------------------------ */

const HorizontalSmallCard = ({ sx }) => (
  <Card
    sx={{
      variant: 'cards.horizontal',
      ...sx,
    }}
  >
    <Box
      sx={{
        mr: '16px',
        height: ['90px', '90px', '90px', '90px', '100px', '100px'],
        width: ['90px', '90px', '90px', '90px', '100px', '100px'],
      }}
    >
      <Image
        src={imgThree}
        sx={{ borderRadius: 'input', objectFit: 'cover', height: '100%' }}
      />
    </Box>
    <Box sx={{ alignSelf: 'center', width: ['45%'] }}>
      <Heading
        as='h5'
        type='cardsSmallHeading'
        sx={{ color: 'greenText', fontFamily: 'body.bold', mb: '4px' }}
      >
        Green Cafe
      </Heading>
      <Paragraph type='cardsParagraph' sx={{ color: 'greenText' }}>
        Gardener in Chiang Mai
      </Paragraph>
    </Box>
  </Card>
);

const HorizontalBigCard = ({ sx }) => (
  <Card
    sx={{
      variant: 'cards.horizontal',
      bg: 'formBg',
      ...sx,
    }}
  >
    <Box
      sx={{
        mr: '16px',
        height: ['90px', '90px', '90px', '90px', '120px', '120px'],
        width: ['90px', '90px', '90px', '90px', '120px', '120px'],
      }}
    >
      <Image
        src={imgTwo}
        sx={{ borderRadius: 'input', objectFit: 'cover', height: '100%' }}
      />
    </Box>
    <Box sx={{ alignSelf: 'center' }}>
      <Heading
        as='h5'
        type='cardBigHeading'
        sx={{ color: 'greenText', fontFamily: 'body.bold', mb: '4px' }}
      >
        Hanging Garden
      </Heading>
      <Paragraph type='cardsParagraph' sx={{ color: 'greenText' }}>
        Florist in Bangkok
      </Paragraph>
    </Box>
  </Card>
);

const VerticalBigCard = ({ sx }) => (
  <Card
    sx={{
      boxShadow: 100,
      variant: 'cards.vertical',
      width: ['94%'],
      ...sx,
    }}
  >
    <CardImgAndTextVertical
      image={imgFour}
      title='Green Thumb'
      text='Gardener in Chiang Mai'
    />
  </Card>
);

const VerticalSmallCard = ({ sx }) => (
  <Card
    sx={{
      boxShadow: 200,
      variant: 'cards.vertical',
      width: ['100%'],
      ...sx,
    }}
  >
    <CardImgAndTextVertical
      image={imgOne}
      title='Potject'
      text='Pottery in Bangkok'
    />
  </Card>
);

/* -------------------------------------------------------- */
/* ----------------------- Sections ----------------------- */
/* -------------------------------------------------------- */

/* -------------------- First Section --------------------- */

const FirstSection = () => (
  <GridWrapper
    sx={{ justifyContent: 'center', pt: ['62px', '80px', '103px', '44px'] }}
    className='animate-section'
  >
    <GreenPointerVector
      sx={{
        alignSelf: ['unset', 'baseline', 'baseline', 'end', 'end', 'end'],
        gridColumn: ['9/11', '9/11', '13/15', '15/17', '13/15', '7/10'],
        gridRow: [1, 2, 2, 1, 2, '1 / span 2'],
        justifySelf: ['unset', 'unset', 'unset', 'unset', 'end', 'end'],
        transform: [
          'translateY(40%)',
          'none',
          'none',
          'translateY(-50%)',
          'translateY(-30%)',
          'translateY(-71%)',
        ],
      }}
    />
    <Number
      number='01.'
      sx={{
        alignSelf: ['end', 'end', 'end', 'end', 'baseline', 'baseline'],
        gridColumn: ['1/8', '1/7', '1/10', '1/10', '2/8', '16/23'],
        gridRow: [2, 1, 1, 1, 1, 1],
        mb: [0, 0, 0, '32px', '59px', '-20px'],
      }}
    />
    <HorizontalSmallCard
      sx={{
        alignSelf: ['unset', 'unset', 'unset', 'end', 'end'],
        gridColumn: ['3/13', '6/12', '9/18', '5/14', '4/11', '4/9'],
        gridRow: [3, 1, 1, 1, 1, 2],
        mb: ['12px', '80px', '80px', 0, 0, 0],
        mt: [0, 0, 0, 0, 0, '54px'],
      }}
    />
    <HorizontalBigCard
      sx={{
        alignSelf: ['unset', 'unset', 'unset', 'unset', 'unset', 'end'],
        gridColumn: ['1/13', '1/9', '1/11', '1/12', '12/21', '6/13'],
        gridRow: [4, 2, 2, 2, 1, 1],
        mt: [0, '12px', '12px', '24px', '23px', 0],
        mb: ['auto', 'auto', 'auto', 'auto', 'auto', 'unset'],
      }}
    />
    <FirstSectionHeading />
  </GridWrapper>
);

/* ------------------- Second Section -------------------- */

const SecondSection = () => (
  <GridWrapper
    sx={{ pt: ['81px'], display: ['grid', 'none'] }}
    className='animate-section'
  >
    <FloatingCircleVector
      sx={{
        alignSelf: ['end'],
        gridRow: [1],
        gridColumn: ['6/8'],
        mb: ['19px'],
      }}
    />
    <VerticalBigCard
      sx={{
        justifySelf: 'end',
        gridColumn: ['1/7'],
        gridRow: [1],
        mb: ['62px'],
      }}
    />
    <VerticalSmallCard
      sx={{ gridColumn: ['8/13'], gridRow: [1], mb: ['29px'], mt: 'auto' }}
    />
    <HorizontalSmallCard sx={{ gridColumn: ['1/11'], gridRow: [2] }} />
    <Number
      number='02.'
      sx={{
        gridColumn: ['4/13'],
        gridRow: [3],
        justifySelf: ['end'],
        mt: ['10px'],
      }}
    />
    <SecondSectionHeading />
  </GridWrapper>
);

/* -------------------- Third Section --------------------- */

const ThirdSection = () => (
  <GridWrapper
    sx={{ pt: ['74px'], display: ['grid', 'none'] }}
    className='animate-section'
  >
    <HorizontalSmallCard sx={{ gridColumn: ['3/13'], gridRow: [1] }} />
    <HorizontalBigCard
      sx={{ gridColumn: ['1/13'], gridRow: [2], my: ['12px'] }}
    />
    <VerticalBigCard
      sx={{
        justifySelf: 'baseline',
        gridColumn: ['1/7'],
        gridRow: [3],
        mt: ['37px'],
      }}
    />
    <VerticalSmallCard
      sx={{ gridColumn: ['7/12'], gridRow: [3], mb: ['auto'], ml: ['5%'] }}
    />
    <Number
      number='03.'
      sx={{
        gridColumn: ['1/10'],
        gridRow: [3],
        justifySelf: ['baseline'],
        transform: ['translateY(-16%)'],
      }}
    />
    <LogoVector
      sx={{
        alignSelf: ['end'],
        gridColumn: ['10/13'],
        gridRow: [3],
        justifySelf: ['end'],
      }}
    />
    <ThirdSectionHeading />
  </GridWrapper>
);
