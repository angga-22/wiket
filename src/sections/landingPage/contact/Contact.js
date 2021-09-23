// external dependencies
import React, { memo } from 'react';

// pieces
import { Box, Heading, Image, Paragraph, Section } from '@thepuzzlers/pieces';

// images
import contactVector from 'assets/svg/contact-vector.svg';

// Components
import { Form } from './Form';

export const Contact = memo(() => (
  <Section
    id='contact-section'
    sx={{
      gridTemplateRows: [null, null, null, null, 'auto 1fr', 'auto 1fr'],
    }}
  >
    <Vector />
    <Headline />
    <SubHeadline />
    <Form />
  </Section>
));

/* ------------------ Text Section ------------------ */

const Headline = () => (
  <Heading
    as='h2'
    type='h2-500'
    sx={{
      gridRow: 1,
      gridColumn: ['2/12', '4/span 6', '2/22', '6/20', '1/11', '2/7'],
      textAlign: ['center', 'center', 'left', 'center', 'left', 'left'],
      mb: 16,
      '&>span': {
        color: 'teal1000',
      },
    }}
  >
    Keep in <span>touch.</span>
  </Heading>
);

const SubHeadline = () => (
  <Paragraph
    type='lead'
    sx={{
      gridRow: [2],
      gridColumn: ['2/span 10', '3/span 8', '2/16', '7/18', '1/10', '2/8'],
      textAlign: ['center', 'center', 'left', 'center', 'left', 'left'],
      mb: '80px',
    }}
  >
    Join our waiting list now and get informed once we open up our network
    further.
  </Paragraph>
);

const Vector = () => (
  <Box
    sx={{
      gridRow: [1, 1, 3, 1, 2, 2],
      gridColumn: ['11/12', '11/12', '22/23', '21/22', '21/23', '22/23'],
      justifySelf: ['baseline', 'baseline', 'end', 'end', 'baseline'],
      transform: [
        'translateY(-100%)',
        'translateY(-100%)',
        'translateY(-75%)',
        'translateY(-80%)',
        'translateY(-130%)',
        'translateY(-70%)',
      ],
      height: ['80px', '80px', '136.74px', '80px', '136.74px'],
      width: ['22.85px', '22.85px', '39.05px', '22.85px', '39.05px'],
      zIndex: 3,
    }}
  >
    <Image src={contactVector} alt='' sx={{ height: '100%' }} />
  </Box>
);
