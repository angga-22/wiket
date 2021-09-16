import React from 'react';
// pieces
import { Box, Paragraph, Heading, GridItem } from '@thepuzzlers/pieces';
import { Text } from 'theme-ui';

const FeatureListing = ({ data }) =>
  data.map((feature) => (
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
          {feature.title}
        </Heading>
      </GridItem>
      {feature.features.map((el) => (
        <>
          <GridItem
            sx={{
              gridColumn: [
                '1 / 10',
                '1 / 9',
                '3 / 16',
                '3 / 12',
                '2 / 12',
                '3 / 10',
              ],
              pb: ['24px', '32px', '32px', '24px', '32px', '32px'],
            }}
          >
            <Paragraph
              type='featureList'
              variant='bold'
              sx={{
                color: 'accentSecondary',
              }}
            >
              {el.title}
            </Paragraph>
          </GridItem>
          <GridItem
            sx={{
              gridColumn: ['11', '11', '21 ', '18', '14 / 16', '14 / 16'],
              display: 'flex',
              justifyContent: 'center',
              transform: 'translateY(10%)',
            }}
          >
            {el.isBlossom && el.title !== 'Images' ? (
              <Box
                sx={{
                  backgroundColor: '#FDA700',
                  width: ['14px', '14px', '14px', '14px', '20px', '20px'],
                  height: ['14px', '14px', '14px', '14px', '20px', '20px'],
                  borderRadius: '50%',
                }}
              />
            ) : null}
            {el.title === 'Images' ? (
              <Text
                sx={{
                  fontWeight: 'bold',
                  color: '#FDA700',
                }}
              >
                5
              </Text>
            ) : null}
          </GridItem>

          <GridItem
            sx={{
              gridColumn: ['12', '12', ' 22', '22', '20 /22', '20 / 22 '],
              display: 'flex',
              justifyContent: 'center',
              transform: 'translateY(10%)',
            }}
          >
            {el.isGrowth && el.title !== 'Images' ? (
              <Box
                sx={{
                  backgroundColor: 'accentSecondary',
                  width: ['14px', '14px', '14px', '14px', '20px', '20px'],
                  height: ['14px', '14px', '14px', '14px', '20px', '20px'],
                  borderRadius: '50%',
                }}
              />
            ) : null}
            {el.title === 'Images' ? (
              <Text
                sx={{
                  fontWeight: 'bold',
                  color: 'accentSecondary',
                }}
              >
                10
              </Text>
            ) : null}
          </GridItem>
        </>
      ))}
    </>
  ));
export default FeatureListing;
