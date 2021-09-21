import React from 'react';
// pieces
import { Box, Paragraph, Heading, GridItem } from '@thepuzzlers/pieces';

export const FeatureListing = ({ data }) =>
  data.map((feature) => <FeatureSection data={feature} />);

const FeatureSection = ({ data }) => (
  <>
    <GridItem
      sx={{
        gridColumn: [
          '1 / 12',
          '1 / 12',
          '3 / 19',
          '3 / 23',
          '2 / 24',
          '3 / 24',
        ],
        mt: ['46px', '51px', '40px', '40px', '80px', '80px'],
      }}
    >
      <Heading
        type='h5'
        variant='bold'
        sx={{
          color: 'accentSecondary',
          mb: '20px',
        }}
      >
        {data.title}
      </Heading>
    </GridItem>
    {data.features.map((el) => (
      <FeatureDetailRow data={el} />
    ))}
  </>
);

const FeatureDetailRow = ({ data }) => (
  <>
    {/* Title */}
    <GridItem
      sx={{
        gridColumn: ['1 / 10', '1 / 9', '3 / 16', '3 / 12', '2 / 12', '3 / 10'],
        // pb: ['24px', '32px', '32px', '24px', '32px', '32px'],
        py: '12px',
      }}
    >
      <Paragraph type='featureList' variant='bold'>
        {data.title}
      </Paragraph>
    </GridItem>
    {/* isBlossom */}
    <GridItem
      sx={{
        gridColumn: [
          '10/span 3',
          '11/span 2',
          '20/span 3',
          '20/span 3',
          '12 / span 12',
          '12 / span 12',
        ],
        display: 'flex',
        justifyContent: 'space-around',
        alignSelf: 'center',
      }}
    >
      {/* isBlossom */}
      <div>
        <Indicator
          color='secondary'
          value={data.blossomCount ?? data.isBlossom}
        />
      </div>
      {/* isGrowth */}
      <div>
        <Indicator color='primary' value={data.growthCount ?? data.isGrowth} />
      </div>
    </GridItem>
  </>
);

const Indicator = ({ value, color }) => {
  if (value === false) {
    // see-through dot
    return <Dot color='background' />;
  }
  if (value === true) {
    // colored dot
    return <Dot color={color} />;
  }
  return (
    // number
    <Paragraph
      variant='bold'
      sx={{
        color,
      }}
    >
      {value}
    </Paragraph>
  );
};

const Dot = ({ color }) => (
  <Box
    sx={{
      backgroundColor: color,
      width: ['14px', '14px', '14px', '14px', '20px', '20px'],
      height: ['14px', '14px', '14px', '14px', '20px', '20px'],
      borderRadius: '50%',
    }}
  />
);
