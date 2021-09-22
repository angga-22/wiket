// pieces
/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  GridWrapper,
  Section,
  GridItem,
  Paragraph,
  Heading,
  srcsetValues,
} from '@thepuzzlers/pieces';
import batikShapeBlind from 'assets/svg/batik-shape-blind.svg';
import batikShapeOrange from 'assets/svg/batik-shape-orange.svg';
import { FeatureListing } from './components/FeatureListing';

export const Pricing = ({ featuresData }) => (
  <section id='feature-price-section' sx={{ paddingTop: '120px' }}>
    <Section>
      <GridWrapper variant='inside.columns'>
        <Headlines />
        <SmallHeadlines />
        <BlossomCard />
        <GrowthCard />
        <FeaturesLabel />

        <BatikShape />
        <FeatureListing data={featuresData} />
      </GridWrapper>
    </Section>
  </section>
);

const Headlines = () => (
  <GridItem
    sx={{
      gridColumn: ['2 / 11', '2 / 12', '8 / 17', '4 / 22', '1 / 8', '2 / 8'],
      gridRow: [1, 1, 1, 1, 1, 1],
      mb: '1em',
    }}
  >
    <Heading
      type='h2'
      sx={{
        fontWeight: 'lighter',
        textAlign: ['center', 'center', 'center', 'center', 'left', 'left'],
      }}
    >
      Explore new relationships{' '}
      <Heading as='span' variant='bold' type='h2'>
        for free.
      </Heading>
    </Heading>
  </GridItem>
);

const SmallHeadlines = () => (
  <GridItem
    sx={{
      gridColumn: ['2 / 12', '3 / 11', '6 / 19', '6 / 20', '1 / 9', '2 /  10'],
      gridRow: [2, 2, 2, 2, 2, 2],
      mb: ['4em', '6em', '4em', '3em', '0', '1em'],
    }}
  >
    <Paragraph
      type='paragraph'
      sx={{
        textAlign: ['center', 'center', 'center', 'center', 'left', 'left'],
      }}
    >
      Join our waiting list today and get informed as soon as we open up our
      network further.
    </Paragraph>
  </GridItem>
);

const BlossomCard = () => (
  <GridItem
    sx={{
      gridColumn: [
        '2 / 12',
        '4 / 10',
        '3 / 13',
        '3 / 13',
        '12 / 18',
        '12 / 18',
      ],
      gridRow: 3,
      borderRadius: 'priceCard',
      backgroundColor: 'secondary',
      textAlign: 'center',
      p: [
        '42px 27px',
        '36px 44px',
        '42px 33px',
        '32px 35px',
        '46px 30px',
        '32px 40px',
      ],
      alignSelf: [null, null, 'center', 'center', 'end', 'end'],
    }}
  >
    <div sx={{ display: 'flex', justifyContent: 'center' }}>
      <Heading
        type='cardHeader'
        variant='bold'
        sx={{
          alignSelf: 'end',
          pb: ['8px', '8px', '14px', '8px', '8px', '8px'],
          pr: '.3em',
        }}
      >
        Blossom{' '}
      </Heading>
      <Heading
        type='cardHeaderSmall'
        variant='bold'
        sx={{ alignSelf: 'start' }}
      >
        Free
      </Heading>
    </div>
    <Paragraph type='cardParagraph'>
      Set up your own profile, conntect with others and share ideas
    </Paragraph>
  </GridItem>
);

const GrowthCard = () => (
  <GridItem
    sx={{
      zIndex: '1',
      gridColumn: [
        '1 / 13',
        '3 / 11',
        '12/ 23',
        '12 / 23',
        '18 / 24',
        '18 / 24',
      ],
      gridRow: [4, 4, 3, 3, 3, 3],
      marginTop: ['-5%', '-5%', '0%', '0%', '0%', '0%'],
      borderRadius: 'priceCard',
      boxShadow: 'priceCard',
      backgroundColor: 'primary',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      p: [
        '40px 51px',
        '32px 61px',
        '48px 36px',
        '56px 42px',
        '56px 20px',
        '56px 10px',
      ],
    }}
  >
    <div sx={{ display: 'flex', justifyContent: 'center' }}>
      <Heading
        type='cardHeader'
        variant='bold'
        sx={{
          alignSelf: 'end',
          color: 'background',
          pb: ['8px', '8px', '14px', '8px', '8px', '8px'],
          pr: '.3em',
        }}
      >
        Grow
      </Heading>
      <Heading
        type='cardHeaderSmall'
        variant='bold'
        sx={{
          alignSelf: 'start',
          color: 'background',
        }}
      >
        $25 / month
      </Heading>
    </div>
    <Paragraph
      type='cardParagraph'
      sx={{
        color: 'background',
      }}
    >
      Everything you need to get started. Comes with your own profile and access
      to our B2B network.
    </Paragraph>
  </GridItem>
);

const BatikShape = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 12',
        '2 / 11',
        '14/ 24',
        '19 / span 6',
        '19 / span 6',
        '21 / span 4',
      ],
      gridRow: [null, null, null, '3/span 2', '1/span 3', '1/span 3'],
      zIndex: '0',
      display: ['none', 'none', 'none', 'block', 'block', 'block'],
      transform: [
        null,
        null,
        null,
        'translateY(32%)',
        'translateY(32%)',
        'translateY(46%)',
      ],
      marginTop: [null, null, null, '10%', '0%', '-15%'],
      marginBottom: 'auto',
    }}
  >
    <picture>
      <source media={srcsetValues[4]} srcSet={batikShapeBlind} />
      <source media={srcsetValues[3]} srcSet={batikShapeOrange} />
      <source media={srcsetValues[2]} srcSet={batikShapeOrange} />
      <source media={srcsetValues[1]} srcSet={batikShapeOrange} />
      <source media={srcsetValues[0]} srcSet={batikShapeOrange} />
      <img src={batikShapeOrange} alt='batik-shape' />
    </picture>
  </GridItem>
);

const FeaturesLabel = () => (
  <GridItem
    sx={{
      gridColumn: ['1 / 12', '1 / 9', ' 3 / 16', '3 / 16', '2 / 10', '3 / 9'],
      gridRow: [5, 5, 4, 4, 3, 3],
      borderRadius: '16px',
      alignSelf: 'end',
      mt: ['77px', '120px', '141px', '120px', '0', '0'],
    }}
  >
    <Heading
      type='h5'
      variant='bold'
      sx={{
        mb: ['16px', '16px', '22px', '12px', '24px', '24px'],
      }}
    >
      Features<span sx={{ color: 'secondary' }}>.</span>
    </Heading>
    <Paragraph type='featureSubline'>
      Both of our plans are especially designed for small businesses and come
      with a rich set of features.
    </Paragraph>
  </GridItem>
);
