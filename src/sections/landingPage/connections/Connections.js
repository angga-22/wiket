// external dependencies
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { memo } from 'react';

// pieces
import { Box, Heading, GridWrapper, Image, Card } from '@thepuzzlers/pieces';

// local components
import { PrimaryCard } from 'components';
import { CardTextBlock } from 'components/blocks/CardTextBlock';

// svgs
import greenPointer from 'assets/svg/pin.svg';
import logo from 'assets/svg/wiket-logo.svg';
import floatingCircle from 'assets/svg/floating-circle-green.svg';
import floatingLeaf from 'assets/svg/floating-leaf.svg';
import line from 'assets/svg/shape03.svg';
import curl from 'assets/svg/shape04.svg';

// card images
import greenCafeImage from 'assets/jpg/connections-image-roastery.jpg';
import hangingGardensImage from 'assets/jpg/connections-image-florist.jpg';
import potjectImage from 'assets/jpg/image-pottery.jpg';
import greenThumbImage from 'assets/jpg/image-gardener.jpg';

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
    <section id='connections' sx={{ paddingTop: '120px' }}>
      <GridWrapper>
        <Headline />
      </GridWrapper>

      <Section
        position={0}
        sectionRef={contentWrapper.current[0]}
        cardRef={primaryCards.current[0]}
        number={data[0].number}
      />
      <Spacer />
      <Section
        position={1}
        sectionRef={contentWrapper.current[0]}
        cardRef={primaryCards.current[0]}
        number={data[1].number}
      />
      <Spacer />
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
/* ------------------ Section Container ------------------- */
/* -------------------------------------------------------- */

const Section = ({ sectionRef, position, number }) => (
  <GridWrapper
    ref={sectionRef}
    sx={{
      justifyContent: 'center',
      pt: ['62px', '80px', '103px', '44px', '92px', '77px'],
    }}
  >
    <Number number={number} position={position} />

    <GreenCafeCard position={position} />
    <HangingGardensCard position={position} />
    <GreenThumbCard position={position} />
    <PotjectCard position={position} />

    <GreenPointerVector position={position} />
    <FloatingCircleVector position={position} />
    <LogoVector position={position} />
    <FloatingLeaf position={position} />
    <Line position={position} />
    <Curl position={position} />

    <SectionHeading position={position} />
  </GridWrapper>
);

/* ------------------------------------------------------ */
/* ------------------- Section Number ------------------- */
/* ------------------------------------------------------ */

const Number = ({ number, position }) => {
  const styles = [
    {
      alignSelf: ['end', 'end', 'end', 'end', 'start', 'start'],
      gridColumn: ['1/8', '1/7', '1/10', '1/10', '2/8', '16/23'],
      gridRow: [2, 1, 1, 1, 1, 1],
      mb: [0, 0, 0, '32px', '59px', '-20px'],
    },
    {
      alignSelf: [null, null, 'end', 'end', 'end', 'end'],
      gridColumn: ['4/13', '4/13', '14/24', '14/25', '16/24', '3/11'],
      gridRow: [3, 3, 1, 1, 1, 1],
      justifySelf: ['end', 'end', 'start', 'end', 'start', 'start'],
      mt: ['10px', '12px', 0, 0, 0, 0],
    },
    {
      alignSelf: [null, null, 'end', 'end', 'end', 'end'],
      gridColumn: ['1/10', '1/10', '1/10', '1/10', '2/8', '16/23'],
      gridRow: [3, 3, 1, 1, 1, 1],
      justifySelf: 'start',
      transform: [
        'translateY(-16%)',
        'translateY(-16%)',
        'unset',
        'unset',
        'unset',
        'translateY(10%)',
      ],
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
/* ------------------------ Cards ------------------------ */
/* ------------------------------------------------------- */

const GreenCafeCard = ({ position }) => {
  const styles = [
    {
      alignSelf: ['unset', 'unset', 'unset', 'end', 'end'],
      gridColumn: ['3/13', '6/13', '9/18', '5/14', '4/11', '4/9'],
      gridRow: [3, 1, 1, 1, 1, 2],
      mb: ['12px', '80px', '80px', 0, 0, 0],
      mt: [0, 0, 0, 0, 0, '54px'],
    },
    {
      alignSelf: [null, null, 'start', 'start', 'start', 'start'],
      gridColumn: ['1/11', '1/8', '3/12', '2/11', '5/12', '15/20'],
      gridRow: 2,
      mt: [0, 0, 0, 0, 0, '48px'],
    },
    {
      alignSelf: [null, null, null, 'start', 'start', 'start'],
      gridColumn: ['3/13', '6/13', '5/14', '12/21', '10/17', '3/8'],
      gridRow: [1, 1, 2, 1, 1, 2],
      mt: [0, 0, '24px', 0, 0, '54px'],
      mb: [0, 0, 0, 0, '24px', 0],
    },
  ];

  return (
    <Card variant='horizontal' sx={styles[position]}>
      <Box
        sx={{
          mr: '16px',
          width: ['38%', '38%', '45%', '45%', '42%', '45%'],
        }}
      >
        <Image
          src={greenCafeImage}
          sx={{ borderRadius: 'input', objectFit: 'cover', height: '100%' }}
        />
      </Box>
      <Box sx={{ alignSelf: 'center', width: ['45%'] }}>
        <CardTextBlock title='Green Cafe' text='Gardener in Chiang Mai' />
      </Box>
    </Card>
  );
};

const HangingGardensCard = ({ position }) => {
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
      alignSelf: [null, null, 'start', 'start', 'start', 'end'],
      gridColumn: ['1/13', '1/9', '9/19', '1/12', '2/11', '8/15'],
      gridRow: [2, 2, 3, 3, 3, 1],
      my: ['12px', '12px', '24px', 0, '24px', 0],
      mb: ['12px', '12px', 'auto', 'auto', 'auto', 0],
    },
  ];

  return (
    <Card
      variant='horizontal'
      sx={{
        bg: 'blue100',
        ...styles[position],
      }}
    >
      <Box
        sx={{
          mr: '16px',
          width: ['32%', '33%', '45%', '32%', '38%', '39%'],
        }}
      >
        <Image
          src={hangingGardensImage}
          sx={{ borderRadius: 'input', objectFit: 'cover', height: '100%' }}
        />
      </Box>
      <Box sx={{ alignSelf: 'center' }}>
        <CardTextBlock large title='Hanging Garden' text='Florist in Bangkok' />
      </Box>
    </Card>
  );
};

const GreenThumbCard = ({ position }) => {
  const styles = [
    {
      display: 'none',
    },
    {
      justifySelf: 'end',
      gridColumn: ['1/7', '2/7', '1/7', '1/7', '4/9', '14/18'],
      gridRow: 1,
      mb: ['62px', '90px', '50px', '44px', '70px', '24px'],
    },
    {
      alignSelf: [null, null, null, 'start', 'start', 'start'],
      justifySelf: 'start',
      gridColumn: ['1/7', '1/6', '2/8', '6/12', '5/10', '4/8'],
      gridRow: [3, 3, 3, 2, 2, 1],
      mt: ['37px', '50px', '24px', '-34px', '-40px', 0],
    },
  ];

  return (
    <PrimaryCard
      image={greenThumbImage}
      title='Green Thumb'
      text='Gardener in Chiang Mai'
      sx={{
        boxShadow: 100,
        width: ['94%'],
        ...styles[position],
      }}
    />
  );
};

const PotjectCard = ({ position }) => {
  const styles = [
    {
      display: 'none',
    },
    {
      gridColumn: ['8/13', '8/12', '8/13', '8/13', '10/14', '19/22'],
      gridRow: 1,
      mb: ['29px', '40px', '30px', '24px', '50px', '0'],
      mt: 'auto',
    },
    {
      gridColumn: ['7/12', '7/11', '12/17', '13/18', '11/15', '9/12'],
      gridRow: [3, 3, 1, 2, 2, 2],
      mb: 'auto',
      ml: ['5%', '5%', 0, 0, 0, 0],
      mt: [0, 0, 0, 0, 0, '54px'],
    },
  ];

  return (
    <PrimaryCard
      image={potjectImage}
      title='Potject'
      text='Pottery in Bangkok'
      sx={{
        boxShadow: 200,
        width: ['100%'],
        ...styles[position],
      }}
    />
  );
};

/* ------------------------------------------------------- */
/* ------------------- Section Heading ------------------- */
/* ------------------------------------------------------- */

const SectionHeading = ({ position }) => {
  const styles = [
    {
      gridColumn: ['1/10', '3/9', '13/24', '15/24', '16/24', '16/24'],
      gridRow: [5, 3, 3, 2, 2, 2],
      mt: ['43px', '64px', '43px', '81px', '40px', '52px'],
    },
    {
      alignSelf: [null, null, 'end', 'start'],
      gridColumn: ['1/10', '3/10', '13/25', '15/25', '16/24', '3/10'],
      gridRow: [4, 4, 3, 3, 2, 2],
      mt: ['14px', '14px', 0, 0, '40px', '52px'],
    },
    {
      alignSelf: [null, null, null, null, 'end', 'start'],
      gridColumn: ['1/10', '3/9', '13/23', '15/24', '16/24', '16/24'],
      gridRow: [4, 4, 4, 4, 3, 2],
      mt: ['38px', '38px', 0, 0, 0, '52px'],
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

/* -------------------------------------------------------- */
/* --------------------- Vectors svgs --------------------- */
/* -------------------------------------------------------- */

const GreenPointerVector = ({ position }) => {
  const styles = [
    {
      alignSelf: ['unset', 'start', 'start', 'end', 'end', 'start'],
      gridColumn: ['9/11', '9/11', '13/15', '15/17', '13/15', '7/10'],
      gridRow: [1, 2, 2, 1, 2, 2],
      justifySelf: ['unset', 'unset', 'unset', 'unset', 'end', 'end'],
      transform: [
        'translateY(40%)',
        'none',
        'none',
        'translateY(-50%)',
        'translateY(-30%)',
        'translateY(-20%)',
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
        width: ['100%', '80%', '100%', '90%', '75%', '75%'],
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
      alignSelf: 'end',
      gridRow: 1,
      gridColumn: ['6/9', '6/9', '6/9', '6/9', '8/11', '17/20'],
      mb: ['19px', '19px', '19px', '10px', '20px', '-24px'],
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
      alignSelf: ['end', 'end', 'start', 'start', 'start', 'start'],
      gridColumn: ['10/13', '9/12', '14/18', '19/23', '15/18', '7/10'],
      gridRow: [3, 3, 2, 2, 2, 2],
      justifySelf: 'end',
      transform: [
        'translateY(10%)',
        'translateY(10%)',
        'translateY(-30%)',
        'translateY(-50%)',
        'translateY(-40%)',
        'translateY(-10%)',
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

const FloatingLeaf = ({ position }) => {
  const styles = [
    {
      display: 'none',
    },
    {
      display: 'none',
    },
    {
      display: ['none', 'block', 'block', 'block', 'block', 'block'],
      gridRow: [1, 1, 3, 2, 2, 1],
      gridColumn: ['unset', '5/7', '8/10', '11/14', '10/12', '3/5'],
      justifySelf: ['unset', 'unset', 'unset', 'end', 'start', 'start'],
      mt: [0, 0, '14px', 0, 0, 0],
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: ['100%', '100%', '100%', '80%', '80%', '80%'],
        zIndex: 0,
        ...styles[position],
      }}
    >
      <Image src={floatingLeaf} alt='' />
    </Box>
  );
};

const Line = ({ position }) => {
  const styles = [
    {
      display: 'none',
    },
    {
      display: 'none',
    },
    {
      alignSelf: 'end',
      display: ['none', 'none', 'block', 'none', 'block', 'none'],
      gridRow: [1, 1, 2, 2, 3, 2],
      gridColumn: ['unset', 'unset', '3/5', 'unset', 'unset'],
      justifySelf: ['end', 'end', 'end', 'end', 'center', 'unset'],
      mb: [0, 0, '14px', 0, 0, 0],
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '60%',
        zIndex: 0,
        ...styles[position],
      }}
    >
      <Image src={line} alt='' />
    </Box>
  );
};

const Curl = ({ position }) => {
  const styles = [
    {
      display: 'none',
    },
    {
      display: 'none',
    },
    {
      alignSelf: 'center',
      display: ['none', 'none', 'block', 'block', 'block', 'block'],
      gridRow: [1, 1, 3, 2, 2, 2],
      gridColumn: ['unset', 'unset', '1/3', '5/7', '4/6', '2/4'],
      justifySelf: ['start', 'start', 'start', 'start', 'start', 'center'],
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: ['80%', '80%', '80%', '80%', '70%', '60%'],
        zIndex: 0,
        ...styles[position],
      }}
    >
      <Image src={curl} alt='' />
    </Box>
  );
};

/* -------------------------------------------------------- */
/* ------------------------ Spacer ------------------------ */
/* -------------------------------------------------------- */

const Spacer = () => <Box sx={{ height: ['100px'] }} />;
