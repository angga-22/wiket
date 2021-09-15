/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// import IconCommunication from 'assets/svg/icon-communication.svg';
// import IconGrowth from 'assets/svg/icon-growth.svg';
// import IconMarket from 'assets/svg/icon-market.svg';
// import IconCollaborate from 'assets/svg/icon-collaborate.svg';

// pieces
import {
  Box,
  Section,
  GridWrapper,
  Heading,
  Paragraph,
  GridItem,
} from '@thepuzzlers/pieces';
// import strengthenTexts from '../../../data/strengthen.json';

export const Strengthen = memo(() => {
  const data = useStaticQuery(graphql`
    {
      allStrengthenJson {
        edges {
          node {
            gridColumnStart
            gridRow
            id
            text
            title
            # image {
            #   childImageSharp {
            #     gatsbyImageData
            #   }
            # }
          }
        }
      }
    }
  `);
  return (
    <Section
      id='strengthen-section'
      sx={{ minHeight: '100vh', alignItems: 'center', mt: '10vw' }}
    >
      <GridWrapper variant='inside.columns'>
        <SectionHeader />
        {data.allStrengthenJson.map((value) => (
          <TextBox
            key={value.id}
            // image={value.image}
            title={value.title}
            text={value.text}
            gridColumnStart={value.gridColumnStart}
            gridRow={value.gridRow}
          />
        ))}
      </GridWrapper>
    </Section>
  );
});
const SectionHeader = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1/span 10',
        '1/span 10',
        '2/span 15',
        '1/span 16',
        '3/span 14',
        '5/span 14',
      ],
      gridRow: '1/span 1',
    }}
  >
    <Heading type='sectionHeading' sx={{ paddingBottom: '1.5em' }}>
      Strengthen your market position.{' '}
      <Heading
        as
        span
        type='sectionHeading'
        variant='bold'
        sx={{ color: 'secondary' }}
      >
        {' '}
        Together.
      </Heading>
    </Heading>
  </GridItem>
);

// const ImgCommunication = () => (
//   <GridItem
//     sx={{
//       gridColumn: [
//         '1/span 3',
//         '2/span 2',
//         '2/span 2',
//         '1/span 3',
//         '3/span 2',
//         '5/span 2',
//       ],
//       gridRow: '2/3',
//       alignSelf: 'center',
//       justifySelf: 'center',
//     }}
//   >
//     <Image src={IconCommunication} />
//   </GridItem>
// );

// const ImgConnect = () => (
//   <GridItem
//     sx={{
//       gridColumn: [
//         '1/span 3',
//         '2/span 2',
//         '2/span 2',
//         '1/span 3',
//         '3/span 2',
//         '5/span 2',
//       ],
//       gridRow: ['4/5', '4/5', '3/4', '3/4', '3/4', '3/4'],
//       alignSelf: 'center',
//       justifySelf: 'center',
//     }}
//   >
//     <Image src={IconCollaborate} />
//   </GridItem>
// );

// const ImgGrowth = () => (
//   <GridItem
//     sx={{
//       gridColumn: [
//         '1/span 3',
//         '2/span 2',
//         '14/span 2',
//         '14/span 3',
//         '14/span 2',
//         '14/span 2',
//       ],
//       gridRow: [3 / 4, 3 / 4, 2 / 3, 2 / 3, 2 / 3, 2 / 3],
//       alignSelf: 'center',
//       justifySelf: 'center',
//     }}
//   >
//     <Image src={IconGrowth} />
//   </GridItem>
// );

// const ImgMarket = () => (
//   <GridItem
//     sx={{
//       gridColumn: [
//         '1/span 2',
//         '2/span 2',
//         '14/span 2',
//         '14/span 3',
//         '14/span 2',
//         '14/span 2',
//       ],
//       gridRow: ['5/6', '5/6', '3/4', '3/4', '3/4', '3/4'],
//       alignSelf: 'center',
//       justifySelf: 'center',
//     }}
//   >
//     <Image src={IconMarket} />
//   </GridItem>
// );

const TextBox = ({
  id,
  text,
  title,
  gridColumnStart,
  gridRow,
  // image
}) => (
  //   const sharpImage = getImage(image);
  <GridItem
    id={id}
    sx={{
      marginTop: '3em',
      gridColumnStart,
      gridRow,
      gridColumnEnd: [
        'span 12',
        'span 10',
        'span 9',
        'span 11',
        'span 9',
        'span 7',
      ],
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {/* <GatsbyImage src={sharpImage} /> */}
      <div>
        <Heading variant='bold' type='titleHeading'>
          {title}
          <span sx={{ color: 'secondary' }}>.</span>
        </Heading>
        <Paragraph type='textParagraph' marginTop='.5em'>
          {text}
        </Paragraph>
      </div>
    </Box>
  </GridItem>
);
