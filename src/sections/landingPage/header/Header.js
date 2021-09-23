// external dependencies
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

// external dependencies
import React, { memo, useRef } from 'react';

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
import { StaticImage } from 'gatsby-plugin-image';

// Local components
import { PrimaryCard } from 'components';
import { CardTextBlock } from 'components/blocks/CardTextBlock';

// images
import linePhonePortrait from 'assets/svg/line-phone-portrait.svg';
import linePhoneLandscape from 'assets/svg/line-phone-landscape.svg';
import lineTabletPortrait from 'assets/svg/line-tablet-portrait.svg';
import lineTabletLandscape from 'assets/svg/line-tablet-landscape.svg';
import lineDesktop from 'assets/svg/line-desktop.svg';
import pinRegular from 'assets/svg/pin-regular.svg';
import pinWide from 'assets/svg/pin-wide.svg';

// EXPORT
export const Header = memo(({ imagesData }) => {
  const headlineRef = useRef();
  const paragraphBlockRef = useRef();
  // Array with MainImgContainer and MainImgDescription components
  const mainImgAndDescRef = useRef([]);
  // Array with PotjectCard, GreenCafeCard, GreenThumbCard components
  const cardsRef = useRef([]);
  // Array with Line, PinRegular, PinWide components
  const vectorsRef = useRef([]);

  React.useEffect(() => {
    /* eslint-disable no-console */
    // Destructuring of elements in arrays
    const [mainImage, imageDescription] = mainImgAndDescRef.current;
    const [potjectCard, greenCafeCard, greenThumbCard] = cardsRef.current;
    const [line, pinR, pinW] = vectorsRef.current;

    console.log('img and desc', mainImage, imageDescription);
    console.log('cards', potjectCard, greenCafeCard, greenThumbCard);
    console.log('vectors', line, pinR, pinW);
  }, []);

  // Curried function to push elements to array
  const pushToRefsArray = (array) => (el) => array.push(el);

  // Push main image and description to array
  mainImgAndDescRef.current = [];
  const pushToMainImgAndDesc = pushToRefsArray(mainImgAndDescRef.current);

  // Push cards to array
  cardsRef.current = [];
  const pushToCards = pushToRefsArray(cardsRef.current);

  // Push vectors to array
  vectorsRef.current = [];
  const pushToVectors = pushToRefsArray(vectorsRef.current);

  return (
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
      <Headline headlineRef={headlineRef} />
      <MainImgContainer designatedRef={pushToMainImgAndDesc} />
      <MainImgDescription designatedRef={pushToMainImgAndDesc} />
      <PotjectCard
        image={imagesData.potjectImage}
        designatedRef={pushToCards}
      />
      <GreenCafeCard
        image={imagesData.greenCafeImage}
        designatedRef={pushToCards}
      />
      <GreenThumbCard
        image={imagesData.greenThumbImage}
        designatedRef={pushToCards}
      />
      <Line designatedRef={pushToVectors} />
      <ParagraphBlock paragraphBlockRef={paragraphBlockRef} />
      <PinRegular designatedRef={pushToVectors} />
      <PinWide designatedRef={pushToVectors} />
    </Section>
  );
});

const Headline = ({ headlineRef }) => (
  <GridItem
    sx={{
      gridColumn: ['1/13', '1/11', '2/22', '13/25', '14/25', '13/24'],
      gridRow: [1, 1, 1, '1/span 2', 1, 1],
      mb: [null, null, '60px'],
    }}
    ref={headlineRef}
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

const ParagraphBlock = ({ paragraphBlockRef }) => (
  <Paragraph
    as='h3'
    type='lead'
    sx={{
      alignSelf: ['end', 'end', 'end', 'end', 'center', 'end'],
      gridColumn: ['1/12', '1/8', '10/20', '4/14', '15/23', '16/22'],
      gridRow: [2, 2, 5, 3, 3, '1/3'],
      transform: [null, null, null, null, 'translateY(-15%)', 'translateX(6%)'],
      mt: ['20px', '24x', 0, 0, 0, 0],
      mb: ['80px', '60px', 0, 0, 0, 0],
    }}
    ref={paragraphBlockRef}
  >
    <b>Wiket is the first business to business network </b>
    which lets you connect to like-minded people.
  </Paragraph>
);

const MainImgContainer = ({ designatedRef }) => (
  <Box
    sx={{
      gridColumn: ['1/13', '4/12', '9/22', '2/11', '2/10', '3/11'],
      gridRow: [4, '4/6', '2/5', 2, '1/4', 1],
      width: '100%',
    }}
    ref={designatedRef}
  >
    <StaticImage
      src='../../../assets/jpg/header-main-img.jpg'
      alt=''
      sx={{
        borderRadius: ['24px', '24px', '24px', '24px', '19.7px', '24px'],
        objectFit: 'contain',
      }}
    />
  </Box>
);

const MainImgDescription = ({ designatedRef }) => (
  <GridItem
    sx={{
      gridColumn: ['1/8', '4/8', '9/16', '2/11', '2/6', '3/7'],
      gridRow: [3, 3, 5, 1, 3, 2],
      mt: ['8px', '8px', '8px', 0, '50px', '16px'],
      mb: ['12px', '12px', 0, '12px', '-30px', 0],
      alignSelf: [null, null, null, null, 'end', null],
    }}
    ref={designatedRef}
  >
    <CardTextBlock title='Hanging Garden' text='Florist in Bangkok' />
  </GridItem>
);

const Card = ({ sx, title, description, image, designatedRef, ...props }) => (
  <PrimaryCard
    image={image}
    title={title}
    text={description}
    sx={{
      boxShadow: 'headerCard',
      alignSelf: 'start', // makes sure card is only as high as its content
      zIndex: 2,
      ...sx,
    }}
    cardRef={designatedRef}
    {...props}
  />
);

const PotjectCard = ({ image, designatedRef }) => (
  <Card
    sx={{
      gridColumn: ['1/7', '2/7', '18/25', '15/21', '8/12', '9/13'],
      gridRow: [5, 5, 2, 2, 1, 1],
      justifySelf: ['end', 'start', 'end', 'left', 'center', 'baseline'],
      alignSelf: ['start', 'start', 'start', 'start', 'start', 'start'],
      width: ['92%', '90%', '88%', '97%', 'auto', '86%'],
      mt: [null, null, null, '130px', '22px', 0],
      transform: [
        'translateY(-50%)',
        'translateY(-42%)',
        'translateY(12%)',
        'initial',
        'initial',
        'translateY(10%)',
      ],
    }}
    image={image}
    title='Potject'
    description='Pottery in Bangkok'
    designatedRef={designatedRef}
  />
);

const GreenCafeCard = ({ image, designatedRef }) => (
  <Card
    sx={{
      gridColumn: ['1/7', '3/7', '7/13', '8/14', '7/12', '9/13'],
      gridRow: [5, 6, 3, 3, 3, 1],
      width: ['auto', 'auto', '95%', '89%', '85%', '90%'],
      alignSelf: ['end', 'end', 'start', 'baseline', 'end', 'end'],
      justifySelf: [
        'baseline',
        'baseline',
        'baseline',
        'baseline',
        'baseline',
        'start',
      ],
      transform: [
        null,
        null,
        'initial',
        'translateY(-50%)',
        'translateY(25%)',
        'translateY(32%)',
      ],
    }}
    image={image}
    title='Green Cafe'
    description='Roastery in Bangkok'
    designatedRef={designatedRef}
  />
);

const GreenThumbCard = ({ image, designatedRef }) => (
  <Card
    sx={{
      gridColumn: ['7/13', '7/12', '17/25', '17/24', '1/5', '3/7'],
      gridRow: [5, 6, 5, 3, '1/3', 1],
      width: ['87%', '83%', '83%', '92%', '94%', '82%'],
      justifySelf: ['center', 'center', 'center', 'left', null, 'left'],
      alignSelf: ['start', null, null, null, null, 'center'],
      transform: [
        'translateY(15%)',
        'translateY(-50%)',
        'translateY(-50%)',
        'initial',
        'translateY(70%)',
        'translateX(-50%)',
      ],
    }}
    image={image}
    title='GreenThumb'
    description='Gardener in Ratchaburi'
    designatedRef={designatedRef}
  />
);

const Line = ({ designatedRef }) => (
  <Box
    as='picture'
    sx={{
      gridColumn: ['3/11', '5/10', '4/span 8', '11/19', '10/15', '11/16'],
      gridRow: ['5', '5/7', '3/6', '2/5', '2/5', '2/4'],
      width: ['auto', 'auto', '95%', 'auto', '88%', 'auto'],
      mb: ['-15px', '-43px', 0, 0, 0, 0], // affects the height of the row
      transform: [
        // leaves height of row unaltered
        'initial',
        'initial',
        'initial',
        'translateY(12%)',
        'translateY(8%)',
        'translateY(-28%)',
      ],
      justifySelf: ['auto', 'center', 'left', 'left', 'left', 'end'],
      alignSelf: [null, 'end', 'end', null, null, null],
    }}
    ref={designatedRef}
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

const PinRegular = ({ designatedRef }) => (
  <GridItem
    sx={{
      display: ['none', 'none', 'block', 'none', 'block', 'block'],
      gridColumn: [null, null, '6/8', null, '1', '1/3'],
      gridRow: [null, null, 2, null, 1, 1],
      justifySelf: [null, null, 'left', null, 'left', 'right'],
      mt: [null, null, '42px', null, '75px', '130px'],
      width: [null, null, 'auto', null, 'auto', '42%'],
    }}
    ref={designatedRef}
  >
    <Image src={pinRegular} alt='' sx={{ width: '100%', maxHeight: '100%' }} />
  </GridItem>
);

const PinWide = ({ designatedRef }) => (
  <GridItem
    sx={{
      alignSelf: 'center',
      gridRow: [5, 4, 3, 2, 1, 1],
      gridColumn: ['3/5', '1/3', '20/23', '9/13', '10/13', '12/13'],
      justifySelf: ['center', 'end', 'end', 'center', 'center', 'baseline'],
      mt: ['-80px', '50px', 0, '-20px', '240px', '50px'],
      width: ['auto', 'auto', '82%', '50%', '30%', 'auto'],
      transform: [null, null, null, null, 'translateX(-30%)', null],
    }}
    ref={designatedRef}
  >
    <Image src={pinWide} alt='' sx={{ width: '100%', maxHeight: '100%' }} />
  </GridItem>
);
