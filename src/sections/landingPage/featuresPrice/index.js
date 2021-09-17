// pieces
/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  Section,
  GridItem,
  Paragraph,
  Heading,
  srcsetValues,
} from '@thepuzzlers/pieces';
import batikShapeBlind from 'assets/svg/batik-shape-blind.svg';
import batikShapeOrange from 'assets/svg/batik-shape-orange.svg';
import FeatureListing from './components/Card';

const FeaturePrice = ({ featuresData }) => (
  <Section id='feature-price-section' sx={{ mt: '10vw' }}>
    <Headlines />
    <SmallHeadlines />
    <BlossomCard />
    <GrowthCard />
    <FeaturesLabel />
    <BatikShape />
    <FeatureListing data={featuresData} />
  </Section>
);

export default FeaturePrice;

const Headlines = () => (
  <GridItem
    sx={{
      gridColumn: ['2 / 11', '2 / 12', '8 / 17', '4 / 22', '1 / 8', '2 / 8'],
      gridRow: [1, 1, 1, 1, 1, 1],
      mb: ['16px'],
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
      mb: ['79px', '117px', '150px', '80px', '177px', '174px'],
    }}
  >
    <Paragraph
      type='paragraph'
      sx={{
        color: 'accentSecondary',
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
        '3 / 11',
        '2 / 13',
        '2 / 13',
        '12 / 18',
        '12 / 18',
      ],
      gridRow: [3, 3, 3, 3, 3, 3],
      borderRadius: '16px',
      backgroundColor: 'secondary',
      textAlign: 'center',
      p: [
        '24px 27px',
        '24px 44px',
        '24px 33px',
        '32px 35px',
        '24px 30px',
        '32px 40px',
      ],
      alignSelf: [null, null, 'center', 'center', 'end', 'end'],
    }}
  >
    <Heading
      type='cardHeader'
      variant='bold'
      sx={{
        pb: ['8px', '8px', '14px', '8px', '8px', '8px'],
      }}
    >
      Blossom
      <Heading type='cardHeaderSmall' variant='bold'>
        {' '}
        Free
      </Heading>
    </Heading>
    <Paragraph type='cardParagraph'>
      Everything you need to get started. Comes with your own profile and access
      to our B2B network.
    </Paragraph>
  </GridItem>
);

const GrowthCard = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 13',
        '2 / 12',
        '12/ 24',
        '12 / 24',
        '18 / 24',
        '18 / 24',
      ],
      gridRow: [4, 4, 3, 3, 3, 3],
      borderRadius: ['16px', '16px', '16px', '16px', '16px', '16px'],
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
        '56px 35px',
      ],
    }}
  >
    <Heading
      type='cardHeader'
      variant='bold'
      sx={{
        color: 'background',
        pb: ['8px', '8px', '14px', '8px', '8px', '8px'],
      }}
    >
      Grow
      <Heading
        type='cardHeaderSmall'
        variant='bold'
        sx={{
          color: 'background',
        }}
      >
        {' '}
        / $25 month
      </Heading>
    </Heading>
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
        '14 / 24',
        '19 / 22',
        '21 / 23',
      ],
      gridRow: [null, null, null, 2, 2, 2],
      zIndex: '-1',
      display: ['none', 'none', 'none', 'none', 'block', 'block'],
      // transform: [null, null, null, null, 'translateY(32%)', 'translateY(46%)'],
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
      borderRadius: ['16px', '16px', '16px', '16px', '16px', '16px'],
      alignSelf: ['end', 'end', 'end', 'end', 'end', 'end'],
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
