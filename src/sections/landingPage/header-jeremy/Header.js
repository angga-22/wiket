// external dependencies
/** @jsxRuntime classic */
/** @jsx jsx */
import { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { jsx, Image } from 'theme-ui';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
// pieces
import {
  Box,
  Section,
  GridWrapper,
  Heading,
  Paragraph,
  GridItem,
} from '@thepuzzlers/pieces';

import FloatingCircle from '../../../assets/svg/floating-circle.svg';
import FloatingMarker from '../../../assets/svg/floating-marker.svg';
import LineDesktop from '../../../assets/svg/line-desktop.svg';
import LineTabletDesktop from '../../../assets/svg/line-tablet-landscape.svg';
import LineTabletPortrait from '../../../assets/svg/line-tablet-portrait.svg';
import LinePhoneLandscape from '../../../assets/svg/line-phone-landscape.svg';

// EXPORT
export const HeaderJeremy = memo(() => {
  const data = useStaticQuery(graphql`
    query getHeaderData {
      headerDataJson {
        cards {
          id
          title
          text
          alt
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          gridColumn
          gridRowStart
          # marginTop
          # marginLeft
          # marginRight
          alignSelf
        }
      }
    }
  `);

  return (
    <Section
      id='header-section'
      sx={{ minHeight: '100vh', alignItems: 'center', mt: '10vw' }}
    >
      <GridWrapper variant='inside.columns'>
        <Headline />
        <MainImg />
        <MainImgCaption />

        {data.headerDataJson.cards.map((card) => (
          <ImgContainer
            key={card.id}
            title={card.title}
            text={card.text}
            image={card.image}
            gridRowStart={card.gridRowStart}
            gridColumn={card.gridColumn}
            // marginTop={card.marginTop}
            // marginLeft={card.marginLeft}
            // marginRight={card.marginLeft}
            alignSelf={card.alignSelf}
          />
        ))}
        <TextParagraph />
        <ImgMarker />
        <ImgCircle />
        <ImgLineDesktop />
        <ImgLineTabletPortrait />
        <ImgLinePhoneDesktop />
        <ImgLineTabletDesktop />
      </GridWrapper>
    </Section>
  );
});

const Headline = () => (
  <GridItem
    sx={{
      gridRowStart: 1,
      gridColumnEnd: [
        'span 12',
        'span 10',
        'span 17',
        'span 12',
        'span 12',
        'span 17',
      ],
      // [12, 12, 24, 24, 24, 24],
      gridColumnStart: [1, 2, 2, 13, 14, 13],
    }}
  >
    <Heading type='h4'>Explore new opportunities.</Heading>
    <Heading variant='bold' type='h1' sx={{ mt: '8px' }}>
      <Box as='span' sx={{ color: 'accentPrimary' }}>
        Grow{' '}
      </Box>
      your business.
    </Heading>
  </GridItem>
);

const MainImg = () => (
  <GridItem
    sx={{
      gridRowStart: [4, 4, 3, 1, 1, 1],
      gridRowEnd: [4, 5, 9, 4, 5, 5],
      gridColumnStart: [1, 4, 9, 3, 3, 3],
      gridColumnEnd: [
        'span 12',
        'span 8',
        'span 13',
        'span 9',
        'span 8',
        'span 8',
      ],
      marginTop: [15, 15, 60, 60, 0, 0],
    }}
  >
    <StaticImage
      src='../../../assets/jpg/header-img-florist.jpg'
      alt='Florist'
      style={{ borderRadius: 24 }}
    />
  </GridItem>
);

const MainImgCaption = () => (
  <GridItem
    sx={{
      gridRowStart: [3, 3, 5, 1, 4, 5],
      gridRowEnd: 'span 1',
      gridColumnStart: [1, 4, 9, 3, 3, 3],
      gridColumnEnd: 'span 6',
      marginTop: ['30%', null, '10%', '-5%', '-5%', '0%'],
    }}
  >
    <Paragraph type='lead' variant='bold' marginTop='.5em'>
      Hanging Garden
    </Paragraph>
    <Paragraph type='secondary'>Florist in Bangkok</Paragraph>
  </GridItem>
);

const ImgContainer = ({
  gridRowStart,
  gridColumn,
  // marginTop,
  // marginLeft,
  // marginRight,
  alignSelf,
  alt,
  title,
  text,
  image,
}) => {
  const sharpImage = getImage(image);

  return (
    <GridItem
      sx={{
        gridRowStart,
        gridColumn,
        // marginTop,
        // marginLeft,
        // marginRight,
        alignSelf,
        gridRowEnd: 'span 1',
        paddingBottom: '.5rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFF8EF',
        boxShadow: '0px 24px 42px rgba(0, 0, 0, 0.2)',
        borderRadius: 12,
        marginBottom: 'auto',
      }}
    >
      <GatsbyImage
        image={sharpImage}
        alt={alt}
        sx={{ borderRadius: 10, margin: '.5em' }}
      />
      <Paragraph type='h6' variant='bold' ml='.5rem'>
        {title}
      </Paragraph>
      <Paragraph ml='.5rem' type='smallParagraph'>
        {text}
      </Paragraph>
    </GridItem>
  );
};

const TextParagraph = () => (
  <GridItem
    sx={{
      gridRowStart: [2, 2, 2, 5, 3, 4],
      gridRowEnd: 'span 1',
      gridColumnStart: [1, 2, 2, 6, 17, 16],
      gridColumnEnd: [
        'span 11',
        'span 8',
        'span 11',
        'span 9',
        'span 6',
        'span 6',
      ],
      alignSelf: ['end', 'end', 'end', 'start', 'end', 'end,'],
      marginTop: ['5%', '5%', '5%', '0%', null, null],
    }}
  >
    <Paragraph type='paragraph'>
      <span style={{ fontWeight: 700 }}>
        Wiket is the first business to business network{' '}
      </span>
      which lets you connect to mind like people.
    </Paragraph>
  </GridItem>
);

const ImgMarker = () => (
  <GridItem
    sx={{
      zIndex: -2,
      gridRowStart: [3, 3, 3, null, 1, 1],
      gridRowEnd: 'span 1',
      gridColumnStart: [7, 7, 7, 7, 2, 2],
      gridColumnEnd: 'span 2',
      display: ['none', 'none', 'inline', 'none', 'inline', 'inline'],
      alignSelf: [null, null, 'end', null, 'center', 'center'],
      marginTop: [0, 0, 0, 0, 0, 0],
    }}
  >
    <Image src={FloatingMarker} />
  </GridItem>
);
const ImgCircle = () => (
  <GridItem
    sx={{
      gridRowStart: [6, 4, 4, 2, 2, 2],
      gridRowEnd: 'span 1',
      gridColumnStart: [3, 2, 21, 13, 11, 11],
      gridColumnEnd: 'span 2',
      marginTop: [null, null, null, '-50%', 0, '20%'],
      marginBottom: ['-30%', '-90%', null, '50%', 0, 0],
      alignSelf: ['center', 'center', 'center', 'center', 'center', 'center'],
    }}
  >
    <Image src={FloatingCircle} />
  </GridItem>
);

const ImgLineDesktop = () => (
  <GridItem
    sx={{
      zIndex: -3,
      gridRowStart: [null, null, null, null, 4, 4],
      gridRowEnd: 'span 3',
      gridColumnStart: [null, null, null, null, 11, 11],
      justifySelf: 'center',
      gridColumnEnd: 'span 6',
      marginTop: [null, null, null, null, '-65%', '-10%'],
      marginLeft: [null, null, null, null, '10%', '-10%'],
      display: ['none', 'none', 'none', 'none', 'none', 'inline'],
    }}
  >
    <Image src={LineDesktop} />
  </GridItem>
);

const ImgLineTabletPortrait = () => (
  <GridItem
    sx={{
      zIndex: -2,
      gridRowStart: 5,
      gridRowEnd: 'span 3',
      gridColumnStart: 4,
      gridColumnEnd: 'span 6',
      marginTop: '-30%',
      display: ['none', 'none', 'inline', 'none', 'none', 'none'],
    }}
  >
    <Image src={LineTabletPortrait} />
  </GridItem>
);

const ImgLinePhoneDesktop = () => (
  <GridItem
    sx={{
      zIndex: -2,
      gridRowStart: [5, 5, 3, 3, null, null],
      gridRowEnd: 'span 3',
      gridColumnStart: [6, 6, 14, 14, null, null],
      gridColumnEnd: 'span 6',
      marginTop: ['5%', '-30%', 0, null, null, null],
      marginLeft: ['-19%', '-10%', null, null, null, null],
      display: ['inline', 'inline', 'none', 'inline', 'none', 'none'],
    }}
  >
    <Image src={LinePhoneLandscape} />
  </GridItem>
);

const ImgLineTabletDesktop = () => (
  <GridItem
    sx={{
      zIndex: -3,
      gridRowStart: [null, null, null, null, 4, 4],
      gridRowEnd: 'span 3',
      gridColumnStart: [null, null, null, null, 11, 11],
      justifySelf: 'center',
      gridColumnEnd: 'span 6',
      marginTop: [null, null, null, null, '-65%', '-10%'],
      marginLeft: [null, null, null, null, '10%', '-10%'],
      display: ['none', 'none', 'none', 'none', 'inline', 'none'],
    }}
  >
    <Image src={LineTabletDesktop} />
  </GridItem>
);
