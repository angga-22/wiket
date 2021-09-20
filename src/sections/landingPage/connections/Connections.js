// external dependencies
import React, { memo } from 'react';

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

// animations
// import { motionChangeSections, motionChangeCards } from './animations';

const quantityOfContentWrapper = [0, 1, 2];

export const Connections = memo(() => {
  const contentWrapper = React.useRef([]);
  const primaryCards = React.useRef([]);

  // Dynamic refs
  contentWrapper.current = quantityOfContentWrapper.map(
    (wrapper, i) => contentWrapper.current[i] ?? React.createRef()
  );
  primaryCards.current = quantityOfContentWrapper.map(
    (wrapper, i) => primaryCards.current[i] ?? React.createRef()
  );

  // console.log(contentWrapper.current);
  // console.log(primaryCards.current);

  // React.useEffect(() => {
  //   motionChangeSections(contentWrapper);
  //   motionChangeCards(primaryCards);
  // });

  return (
    <section>
      <GridWrapper
        sx={{ mt: ['360px', '584px', '390px', '237px', '262px', '178px'] }}
      >
        <Headline />
      </GridWrapper>

      <Section
        position={0}
        sectionRef={contentWrapper.current[0]}
        cardRef={primaryCards.current[0]}
        number='01.'
      />
      <Section
        position={1}
        sectionRef={contentWrapper.current[0]}
        cardRef={primaryCards.current[0]}
        number='02.'
      />
      <Section
        position={2}
        sectionRef={contentWrapper.current[0]}
        cardRef={primaryCards.current[0]}
        number='03.'
      />
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

const GreenPointerVector = ({ position }) => {
  const styles = [
    {
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
    },
    {
      display: 'none',
    },
    {
      display: 'none',
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        height: ['58px', '76px', '54px', '54px', '65px', '123px'],
        width: ['49px', '64px', '46px', '46px', '55px', '105px'],
        zIndex: 0,
        ...styles[position],
      }}
    >
      <Image src={greenPointer} alt='' />
    </Box>
  );
};

const FloatingCircleVector = ({ position }) => {
  const styles = [
    {
      display: 'none',
    },
    {
      alignSelf: ['end'],
      gridRow: [1],
      gridColumn: ['6/8'],
      mb: ['19px'],
    },
    {
      display: 'none',
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        height: ['65px'],
        width: ['76px'],
        zIndex: 0,
        ...styles[position],
      }}
    >
      <Image src={floatingCircle} alt='' />
    </Box>
  );
};

const LogoVector = ({ position }) => {
  const styles = [
    {
      display: 'none',
    },
    {
      display: 'none',
    },
    {
      alignSelf: ['end'],
      gridColumn: ['10/13'],
      gridRow: [3],
      justifySelf: ['end'],
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        height: ['111px'],
        width: ['76px'],
        zIndex: 0,
        ...styles[position],
      }}
    >
      <Image src={logo} alt='' />
    </Box>
  );
};

/* ------------------------------------------------------- */
/* ------------------- Sections Number ------------------- */
/* ------------------------------------------------------- */

const Number = ({ number, position }) => {
  const styles = [
    {
      alignSelf: ['end', 'end', 'end', 'end', 'baseline', 'baseline'],
      gridColumn: ['1/8', '1/7', '1/10', '1/10', '2/8', '16/23'],
      gridRow: [2, 1, 1, 1, 1, 1],
      mb: [0, 0, 0, '32px', '59px', '-20px'],
    },
    {
      gridColumn: ['4/13'],
      gridRow: [3],
      justifySelf: ['end'],
      mt: ['10px'],
    },
    {
      gridColumn: ['1/10'],
      gridRow: [3],
      justifySelf: ['baseline'],
      transform: ['translateY(-16%)'],
    },
  ];

  return (
    <Heading
      as='h2'
      type='connectionsNumber'
      sx={{
        fontFamily: 'spoof-bold',
        color: 'accentPrimary',
        ...styles[position],
      }}
    >
      {number}
    </Heading>
  );
};

/* ------------------------------------------------------- */
/* ------------------ Sections Headings ------------------ */
/* ------------------------------------------------------- */

const FirstSectionHeading = () => (
  <Heading
    as='h2'
    type='connectionsSectionHeading'
    sx={{
      gridColumn: ['1/11', '3/10', '13/25', '15/25', '16/24', '16/24'],
      gridRow: [5, 3, 3, 2, 2, 2],
      mt: ['43px', '64px', '43px', '81px', '40px', '52px'],
    }}
  >
    Start by <span>connecting </span> with your current business partners.
  </Heading>
);

// const SecondSectionHeading = () => (
//   <Heading
//     as='h2'
//     type='connectionsSectionHeading'
//     sx={{
//       gridColumn: ['1/10'],
//       gridRow: [4],
//       mt: ['14px'],
//     }}
//   >
//     See interesting connection your <span>partners already have.</span>
//   </Heading>
// );

// const ThirdSectionHeading = () => (
//   <Heading
//     as='h2'
//     type='connectionsSectionHeading'
//     sx={{
//       gridColumn: ['1/10'],
//       gridRow: [4],
//       mt: ['38px'],
//     }}
//   >
//     Connect with <span>new businesses </span>
//     through your partners.
//   </Heading>
// );

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
        mt: '12px',
        mb: '4px',
      }}
    >
      {title}
    </Heading>
    <Paragraph type='cardsParagraph'>{text}</Paragraph>
  </>
);

/* ------------------------ Cards ------------------------ */

const HorizontalSmallCard = ({ position }) => {
  const styles = [
    {
      alignSelf: ['unset', 'unset', 'unset', 'end', 'end'],
      gridColumn: ['3/13', '6/12', '9/18', '5/14', '4/11', '4/9'],
      gridRow: [3, 1, 1, 1, 1, 2],
      mb: ['12px', '80px', '80px', 0, 0, 0],
      mt: [0, 0, 0, 0, 0, '54px'],
    },
    {
      gridColumn: ['1/11'],
      gridRow: [2],
    },
    {
      gridColumn: ['3/13'],
      gridRow: [1],
    },
  ];

  return (
    <Card
      sx={{
        variant: 'cards.horizontal',
        ...styles[position],
      }}
    >
      <Box
        sx={{
          mr: '16px',
          height: ['90px', '90px', '90px', '90px', '100px', '100px'],
          width: ['38%', '38%', '38%', '38%', '45%', '45%'],
        }}
      >
        <Image
          src={imgThree}
          sx={{ borderRadius: 'input', objectFit: 'cover', height: '100%' }}
        />
      </Box>
      <Box sx={{ alignSelf: 'center', width: ['45%'] }}>
        <Heading as='h5' type='cardsSmallHeading' sx={{ mb: '4px' }}>
          Green Cafe
        </Heading>
        <Paragraph type='cardsParagraph'>Gardener in Chiang Mai</Paragraph>
      </Box>
    </Card>
  );
};

const HorizontalBigCard = ({ position }) => {
  const styles = [
    {
      alignSelf: ['unset', 'unset', 'unset', 'unset', 'unset', 'end'],
      gridColumn: ['1/13', '1/9', '1/11', '1/12', '12/21', '6/13'],
      gridRow: [4, 2, 2, 2, 1, 1],
      mt: [0, '12px', '12px', '24px', '23px', 0],
      mb: ['auto', 'auto', 'auto', 'auto', 'auto', 'unset'],
    },
    {
      display: 'none',
    },
    {
      gridColumn: ['1/13'],
      gridRow: [2],
      my: ['12px'],
    },
  ];

  return (
    <Card
      sx={{
        variant: 'cards.horizontal',
        bg: 'formBg',
        ...styles[position],
      }}
    >
      <Box
        sx={{
          mr: '16px',
          width: ['32%', '32%', '32%', '32%', '39%', '39%'],
        }}
      >
        <Image
          src={imgTwo}
          sx={{ borderRadius: 'input', objectFit: 'cover', height: '100%' }}
        />
      </Box>
      <Box sx={{ alignSelf: 'center' }}>
        <Heading as='h5' type='cardBigHeading' sx={{ mb: '4px' }}>
          Hanging Garden
        </Heading>
        <Paragraph type='cardsParagraph'>Florist in Bangkok</Paragraph>
      </Box>
    </Card>
  );
};

const VerticalBigCard = ({ position }) => {
  const styles = [
    {
      display: 'none',
    },
    {
      justifySelf: 'end',
      gridColumn: ['1/7'],
      gridRow: [1],
      mb: ['62px'],
    },
    {
      justifySelf: 'baseline',
      gridColumn: ['1/7'],
      gridRow: [3],
      mt: ['37px'],
    },
  ];

  return (
    <Card
      sx={{
        boxShadow: 100,
        variant: 'cards.vertical',
        width: ['94%'],
        ...styles[position],
      }}
    >
      <CardImgAndTextVertical
        image={imgFour}
        title='Green Thumb'
        text='Gardener in Chiang Mai'
      />
    </Card>
  );
};

const VerticalSmallCard = ({ position }) => {
  const styles = [
    {
      display: 'none',
    },
    {
      gridColumn: ['8/13'],
      gridRow: [1],
      mb: ['29px'],
      mt: 'auto',
    },
    {
      gridColumn: ['7/12'],
      gridRow: [3],
      mb: ['auto'],
      ml: ['5%'],
    },
  ];

  return (
    <Card
      sx={{
        boxShadow: 200,
        variant: 'cards.vertical',
        width: ['100%'],
        ...styles[position],
      }}
    >
      <CardImgAndTextVertical
        image={imgOne}
        title='Potject'
        text='Pottery in Bangkok'
      />
    </Card>
  );
};

/* -------------------------------------------------------- */
/* ----------------------- Sections ----------------------- */
/* -------------------------------------------------------- */

/* -------------------- First Section --------------------- */

const Section = ({ sectionRef, position, number }) => (
  <GridWrapper
    ref={sectionRef}
    sx={{ justifyContent: 'center', pt: ['62px', '80px', '103px', '44px'] }}
  >
    <Number number={number} position={position} />

    <HorizontalSmallCard position={position} />
    <HorizontalBigCard position={position} />
    <VerticalBigCard position={position} />
    <VerticalSmallCard position={position} />

    <GreenPointerVector position={position} />
    <FloatingCircleVector position={position} />
    <LogoVector position={position} />

    <FirstSectionHeading />
  </GridWrapper>
);
