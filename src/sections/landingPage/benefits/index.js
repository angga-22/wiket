/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Section, GridItem, Heading } from '@thepuzzlers/pieces';
import Card from './components/Card';

export const Benefit = ({ benefitData }) => (
  <Section id='benefit-section' sx={{ mt: '10vw' }}>
    <Headlines />
    <FirstBenefit>
      <Card
        label={benefitData.firstBenefit.label}
        description={benefitData.firstBenefit.description}
        image={benefitData.firstBenefit.img}
      />
    </FirstBenefit>
    <SecondBenefit>
      <Card
        label={benefitData.secondBenefit.label}
        description={benefitData.secondBenefit.description}
        image={benefitData.secondBenefit.img}
      />
    </SecondBenefit>
    <ThirdBenefit>
      <Card
        label={benefitData.thirdBenefit.label}
        description={benefitData.thirdBenefit.description}
        image={benefitData.thirdBenefit.img}
      />
    </ThirdBenefit>
    <FourthBenefit>
      <Card
        label={benefitData.fourthBenefit.label}
        description={benefitData.fourthBenefit.description}
        image={benefitData.fourthBenefit.img}
      />
    </FourthBenefit>
  </Section>
);

// COMPONENT

const Headlines = () => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 12',
        '1 / 12',
        '3 / span 19',
        '1 / 24',
        '4 / 19',
        '5 /  18',
      ],
      gridRow: [1, 1, 1, 1, 1, 1],
      mb: ['48px', '65px', '76px', '50px', '80px', '80px'],
    }}
  >
    <Heading
      type='h2'
      sx={{
        color: 'accentSecondary',
      }}
    >
      Strengthen your market position.
      <Heading
        as='span'
        type='h2'
        variant='bold'
        sx={{ color: 'accentPrimary' }}
      >
        Together
      </Heading>
    </Heading>
  </GridItem>
);

const FirstBenefit = ({ children }) => (
  <GridItem
    sx={{
      gridColumn: ['1 / 13', '2 / 12', '3 / 12', '1 / 12', '4 / 12', '5 / 11'],
      gridRow: [2, 2, 2, 2, 2, 2],
      mb: ['32px', '50px', '62px', '56px', '64px', '90px'],
    }}
  >
    {children}
  </GridItem>
);

const SecondBenefit = ({ children }) => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 13',
        '2 / 12',
        '14 / 23',
        '13 / 24',
        '14 / 22',
        ' 14 / 20',
      ],
      gridRow: [3, 3, 2, 2, 2, 2],
      mb: ['32px', '50px', '62px', '56px', '64px', '90px'],
    }}
  >
    {children}
  </GridItem>
);

const ThirdBenefit = ({ children }) => (
  <GridItem
    sx={{
      gridColumn: [' 1 / 13', '2 / 12', '3 / 12', '1 / 12', '4 / 12', '5 / 11'],
      gridRow: [4, 4, 3, 3, 3, 3],
      mb: ['32px', '50px', '0', '0', '0', '0'],
    }}
  >
    {children}
  </GridItem>
);

const FourthBenefit = ({ children }) => (
  <GridItem
    sx={{
      gridColumn: [
        '1 / 13',
        '2 / 12',
        '14 / 23',
        '13 / 24',
        '14 / 22',
        ' 14 / 20',
      ],
      gridRow: [5, 5, 3, 3, 3, 3],
      mb: ['32px', '50px', '0', '0', '0', '0'],
    }}
  >
    {children}
  </GridItem>
);
