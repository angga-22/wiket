/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// pieces
import { Box, Section, Heading, GridItem, Image } from '@thepuzzlers/pieces';

// Local components
import { PrimaryTextBlock } from 'components/blocks/PrimaryTextBlock';

export const Benefits = memo(() => {
  const data = useStaticQuery(graphql`
    {
      allBenefitsJson {
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
      id='benefits'
      sx={{
        paddingTop: ['120px', '120px', '120px', '120px', '120px', '120px'],
        alignItems: 'center',
      }}
    >
      <SectionHeader />
      {data.allBenefitsJson.nodes.map((value) => (
        <TextBox
          key={value.id}
          image={value.image}
          title={value.title}
          text={value.text}
          gridColumnStart={value.gridColumnStart}
          gridRow={value.gridRow}
        />
      ))}
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
    <Heading as='h2' type='h2-500'>
      Strengthen your market position. <span>Together.</span>
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
      <PrimaryTextBlock sx={{ paddingTop: '1em' }} title={title} text={text} />
    </Box>
  </GridItem>
);
