/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { memo } from 'react';
import {
  Section,
  GridWrapper,
  Heading,
  GridItem,
  Image,
} from '@thepuzzlers/pieces';
import Tick from '../../../assets/svg/tick.svg';

export const Quote = memo(() => (
  <Section
    id='values-section'
    sx={{
      //  minHeight: '50vh',
      alignItems: 'center',
    }}
  >
    <GridWrapper variant='inside.columns'>
      <GridItem
        sx={{
          gridColumn: [
            '6/span 2',
            '6/span 2',
            '12/span 2',
            '12/span 2',
            '12/span 2',
            '12/span 2',
          ],
          gridRow: '1/2',
        }}
      >
        <Image
          src={Tick}
          sx={{ width: ['100%', '100%', '100%', '100%', '100%', '75%'] }}
        />
      </GridItem>

      <GridItem
        sx={{
          gridColumn: [
            '1/span 12',
            '3/span 8',
            '6/span 14',
            '4/span 18',
            '6/span 15',
            '6/span 14',
          ],
          gridRow: '2/3',
        }}
      >
        <Heading
          as='h2'
          type='sectionHeading'
          sx={{ paddingY: '.5em', textAlign: 'center' }}
        >
          Start growing your business when you’re ready.
        </Heading>
      </GridItem>
    </GridWrapper>
  </Section>
));
