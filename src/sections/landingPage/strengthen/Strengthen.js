/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// pieces
import {
  Box,
  Section,
  GridWrapper,
  Heading,
  Paragraph,
  GridItem,
  Image,
} from '@thepuzzlers/pieces';

export const Strengthen = memo(() => {
  const data = useStaticQuery(graphql`
    {
      allStrengthenJson {
        nodes {
          gridColumnStart
          gridRow
          id
          text
          title
          image {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <Section
      id='strengthen-section'
      sx={{ minHeight: '50vh', alignItems: 'center', mt: '20vh' }}
    >
      <GridWrapper variant='inside.columns'>
        <SectionHeader />
        {data.allStrengthenJson.nodes.map((value) => (
          <TextBox
            key={value.id}
            image={value.image}
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
        '2/span 19',
        '1/span 17',
        '3/span 14',
        '5/span 14',
      ],
      gridRow: '1/span 1',
    }}
  >
    <Heading type='sectionHeading' sx={{ paddingBottom: '1.5em' }}>
      Strengthen your market position.{' '}
      <Heading
        as='span'
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

const TextBox = ({ id, text, title, gridColumnStart, gridRow, image }) => (
  <GridItem
    id={id}
    sx={{
      marginTop: '3em',
      gridColumnStart,
      gridRow,
      gridColumnEnd: [
        'span 12',
        'span 8',
        'span 9',
        'span 11',
        'span 9',
        'span 7',
      ],
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['row', 'row', 'column', 'row', 'row', 'row'],
      }}
    >
      <Image
        src={image.publicURL}
        sx={{
          paddingRight: '1em',
          alignSelf: 'start',
          width: ['50%', '50%', '30%', '50%', '50%', '50%'],
        }}
      />
      <div sx={{ paddingTop: '1em' }}>
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
