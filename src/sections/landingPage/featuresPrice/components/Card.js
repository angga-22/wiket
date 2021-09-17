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
              // pb: ['24px', '32px', '32px', '24px', '32px', '32px'],
              py: '12px',
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
            <div>
              {el.isBlossom && el.title !== 'Images' ? (
                <Box
                  sx={{
                    backgroundColor: 'secondary',
                    width: ['14px', '14px', '14px', '14px', '20px', '20px'],
                    height: ['14px', '14px', '14px', '14px', '20px', '20px'],
                    borderRadius: '50%',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    backgroundColor: 'background',
                    width: ['14px', '14px', '14px', '14px', '20px', '20px'],
                    height: ['14px', '14px', '14px', '14px', '20px', '20px'],
                    borderRadius: '50%',
                    display: 'flex',
                  }}
                />
              )}

              {el.title === 'Images' ? (
                <Text
                  sx={{
                    fontWeight: 'bold',
                    color: 'secondary',
                    alignSelf: 'center',
                  }}
                >
                  5
                </Text>
              ) : null}
            </div>
            <div sx={{ display: 'flex' }}>
              {el.isGrowth && el.title !== 'Images' ? (
                <Box
                  sx={{
                    backgroundColor: 'accentSecondary',
                    width: ['14px', '14px', '14px', '14px', '20px', '20px'],
                    height: ['14px', '14px', '14px', '14px', '20px', '20px'],
                    borderRadius: '50%',
                    display: 'flex',
                  }}
                />
              ) : null}

              {el.title === 'Images' ? (
                <Text
                  sx={{
                    fontWeight: 'bold',
                    color: 'accentSecondary',
                    alignSelf: 'center',
                  }}
                >
                  10
                </Text>
              ) : null}
            </div>
          </GridItem>
        </>
      ))}
    </>
  ));
export default FeatureListing;
