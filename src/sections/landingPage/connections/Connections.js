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
import { PrimaryCard } from 'components';

// svgs
import greenPointer from 'assets/svg/pin.svg';
import logo from 'assets/svg/wiket-logo.svg';
import floatingCircle from 'assets/svg/floating-circle-green.svg';

// card images
import imgThree from 'assets/jpg/image-roastery.jpg';
import imgTwo from 'assets/jpg/image-florist.jpg';
import imgOne from 'assets/jpg/header-sub-img-1.jpg';
import imgFour from 'assets/jpg/connections-card-4.jpg';

// animations
// import { motionChangeSections, motionChangeCards } from './animations';

const quantityOfContentWrapper = [0, 1, 2];

const data = [
  {
    text: (
      <>
        Start by <span>connecting</span> with your current business partners.
      </>
    ),
    number: '01.',
  },
  {
    text: (
      <>
        See interesting connection your <span>partners already have.</span>
      </>
    ),
    number: '02.',
  },
  {
    text: (
      <>
        Connect with <span>new businesses </span> through your partners.
      </>
    ),
    number: '03.',
  },
];

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

  // React.useEffect(() => {
  //   motionChangeSections(contentWrapper);
  //   motionChangeCards(primaryCards);
  // });

  return (
    <section>
      <GridWrapper
      // sx={{ mt: ['360px', '584px', '390px', '237px', '262px', '178px'] }}
      >
        <Headline />
      </GridWrapper>

      <Section
        position={0}
        sectionRef={contentWrapper.current[0]}
        cardRef={primaryCards.current[0]}
        number={data[0].number}
      />
      <Section
        position={1}
        sectionRef={contentWrapper.current[0]}
        cardRef={primaryCards.current[0]}
        number={data[1].number}
      />
      <Section
        position={2}
        sectionRef={contentWrapper.current[0]}
        cardRef={primaryCards.current[0]}
        number={data[2].number}
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
      gridColumn: ['1/13', '1/10', '1/16', '1/19', '1/16', '2/13'],
    }}
  >
    <span>Build strong connections. </span>
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
      alignSelf: ['end', 'end', 'end', 'end'],
      gridRow: [1, 1, 1, 1],
      gridColumn: ['6/9', '6/9', '6/9', '6/9'],
      mb: ['19px', '19px', '19px', '10px'],
    },
    {
      display: 'none',
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
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
      alignSelf: ['end', 'end', 'start', 'start'],
      gridColumn: ['10/13', '9/12', '14/18', '19/23'],
      gridRow: [3, 3, 2, 2],
      justifySelf: ['end', 'end', 'end', 'end'],
      transform: [
        'translateY(10%)',
        'translateY(10%)',
        'translateY(-30%)',
        'translateY(-50%)',
      ],
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: [null, '80%'],
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
      alignSelf: ['end', 'end', 'end', 'end', 'start', 'start'],
      gridColumn: ['1/8', '1/7', '1/10', '1/10', '2/8', '16/23'],
      gridRow: [2, 1, 1, 1, 1, 1],
      mb: [0, 0, 0, '32px', '59px', '-20px'],
    },
    {
      alignSelf: [null, null, 'end', 'end'],
      gridColumn: ['4/13', '4/13', '14/24', '14/25'],
      gridRow: [3, 3, 1, 1],
      justifySelf: ['end', 'end', 'start', 'end'],
      mt: ['10px', '12px', 0, 0],
    },
    {
      alignSelf: [null, null, 'end', 'end'],
      gridColumn: ['1/10', '1/10', '1/10', '1/10'],
      gridRow: [3, 3, 1, 1],
      justifySelf: ['start', 'start', 'start', 'start'],
      transform: ['translateY(-16%)', 'translateY(-16%)', 'unset', 'unset'],
    },
  ];

  return (
    <Heading
      as='h2'
      type='connectionsNumber'
      sx={{
        color: 'secondary',
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

const SectionHeading = ({ position }) => {
  const styles = [
    {
      gridColumn: ['1/11', '3/10', '13/25', '15/25', '16/24', '16/24'],
      gridRow: [5, 3, 3, 2, 2, 2],
      mt: ['43px', '64px', '43px', '81px', '40px', '52px'],
    },
    {
      alignSelf: [null, null, 'end'],
      gridColumn: ['1/10', '3/10', '13/25', '15/25', '16/24', '16/24'],
      gridRow: [4, 4, 3],
      mt: ['14px', '14px', 0, 0],
    },
    {
      gridColumn: ['1/10', '3/10', '13/25', '15/25', '16/24', '16/24'],
      gridRow: [4],
      mt: ['38px', '38px', 0, 0],
    },
  ];

  return (
    <Heading
      as='h2'
      type='connectionsSectionHeading'
      sx={{
        ...styles[position],
      }}
    >
      {data[position].text}
    </Heading>
  );
};

/* ------------------------------------------------------- */
/* ------------------------ Cards ------------------------ */
/* ------------------------------------------------------- */

const HorizontalSmallCard = ({ position }) => {
  const styles = [
    {
      alignSelf: ['unset', 'unset', 'unset', 'end', 'end'],
      gridColumn: ['3/13', '6/13', '9/18', '5/14', '4/11', '4/9'],
      gridRow: [3, 1, 1, 1, 1, 2],
      mb: ['12px', '80px', '80px', 0, 0, 0],
      mt: [0, 0, 0, 0, 0, '54px'],
    },
    {
      alignSelf: [null, null, 'start', 'start'],
      gridColumn: ['1/11', '1/8', '3/12', '2/11'],
      gridRow: [2, 2, 2, 2],
    },
    {
      alignSelf: [null, null, null, 'start'],
      gridColumn: ['3/13', '6/13', '5/14', '12/21'],
      gridRow: [1, 1, 2, 1],
      mt: [0, 0, '24px', 0],
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
          width: ['38%', '38%', '45%', '45%', '45%', '45%'],
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
      alignSelf: [null, null, 'start', 'start'],
      gridColumn: ['1/13', '1/9', '9/19', '1/12'],
      gridRow: [2, 2, 3, 3],
      my: ['12px', '12px', '24px', 0],
      mb: ['12px', '12px', 'auto', 'auto'],
    },
  ];

  return (
    <Card
      sx={{
        variant: 'cards.horizontal',
        bg: 'blue100',
        ...styles[position],
      }}
    >
      <Box
        sx={{
          mr: '16px',
          width: ['32%', '33%%', '45%', '32%', '39%', '39%'],
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
      gridColumn: ['1/7', '2/7', '1/7', '1/7'],
      gridRow: [1, 1, 1, 1],
      mb: ['62px', '90px', '50px', '44px'],
    },
    {
      alignSelf: [null, null, null, 'start'],
      justifySelf: 'baseline',
      gridColumn: ['1/7', '1/6', '2/8', '6/12'],
      gridRow: [3, 3, 3, 2],
      mt: ['37px', '50px', '24px', '-34px'],
    },
  ];

  return (
    <PrimaryCard
      image={imgFour}
      title='Green Thumb'
      text='Gardener in Chiang Mai'
      sx={{
        boxShadow: 100,
        variant: 'cards.vertical',
        width: ['94%'],
        ...styles[position],
      }}
    />
  );
};

const VerticalSmallCard = ({ position }) => {
  const styles = [
    {
      display: 'none',
    },
    {
      gridColumn: ['8/13', '8/12', '8/13', '8/13'],
      gridRow: [1, 1, 1, 1],
      mb: ['29px', '40px', '30px', '24px'],
      mt: 'auto',
    },
    {
      gridColumn: ['7/12', '7/11', '12/17', '13/18'],
      gridRow: [3, 3, 1, 2],
      mb: ['auto'],
      ml: ['5%', '5%', 0, 0],
    },
  ];

  return (
    <PrimaryCard
      image={imgOne}
      title='Potject'
      text='Pottery in Bangkok'
      sx={{
        boxShadow: 200,
        variant: 'cards.vertical',
        width: ['100%'],
        ...styles[position],
      }}
    />
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

    <SectionHeading position={position} />
  </GridWrapper>
);
