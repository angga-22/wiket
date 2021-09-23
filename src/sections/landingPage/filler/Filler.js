/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { memo } from 'react';
import { Section, GridItem, Image } from '@thepuzzlers/pieces';
import Feather from '../../../assets/svg/feather.svg';
import Key from '../../../assets/svg/key.svg';

// pieces

export const Filler = memo(() => (
  <Section
    id='values-section'
    sx={{
      alignItems: 'center',
    }}
  >
    <GridItem
      sx={{
        gridColumn: [
          '3/span 2',
          '4/span 1',
          '8/span 2',
          '8/span 2',
          '9/span 2',
          '6/span 2',
        ],
        gridRow: '1/2',
      }}
    >
      <Image src={Feather} />
    </GridItem>
    <GridItem
      src={Key}
      sx={{
        gridColumn: [
          '9/span 2',
          '9/span 1',
          '19/span 2',
          '18/span 2',
          '14/span 2',
          '14/span 2',
        ],
        gridRow: '2/3',
        paddingTop: ['3em', '3em', '3em', '3em', '2em', '2em'],
      }}
    >
      <Image src={Key} />
    </GridItem>
  </Section>
));
