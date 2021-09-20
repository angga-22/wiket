// external dependencies
import React, { memo, useState } from 'react';

// pieces
import {
  Box,
  Heading,
  Image,
  Label,
  Input,
  Button,
  Paragraph,
  GridWrapper,
  GridItem,
} from '@thepuzzlers/pieces';

// images
import contactVector from 'assets/svg/contact-vector.svg';

export const Contact = memo(() => {
  const [formValues, setValues] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formValues);
  };

  return (
    <GridWrapper
      sx={{
        gridTemplateRows: [null, null, null, null, 'auto 1fr', 'auto 1fr'],
      }}
    >
      <Vector />
      <Headline />
      <SubHeadline />
      <FormWrapper onSubmit={handleSubmit}>
        <NameInput value={formValues} inputChange={handleInputChange} />
        <EmailInput value={formValues} inputChange={handleInputChange} />
        <Textarea value={formValues} inputChange={handleInputChange} />
        <Button
          type='submit'
          variant='tertiary'
          sx={{
            gridColumn: ['1/7', '2/6', '3/9', '3/9', '2/8', '1/8'],
            gridRow: [4, 4, 4, 3, 4, 3],
            justifySelf: ['auto', 'auto', 'auto', 'auto', 'left', 'left'],
            alignSelf: 'start',
          }}
        >
          Get started
        </Button>
        <FormParagraph />
      </FormWrapper>
    </GridWrapper>
  );
});

/* ------------------ Text Section ------------------ */

const Headline = () => (
  <Heading
    type='h2'
    // type='contactHeading'
    sx={{
      gridRow: [1],
      gridColumn: ['2/12', '4/span 6', '2/22', '6/20', '1/11', '2/7'],
      textAlign: ['center', 'center', 'left', 'center', 'left', 'left'],
      mb: 16,
    }}
  >
    Keep in{' '}
    <Heading
      as='span'
      type='h2'
      variant='bold'
      // sx={{ fontFamily: 'spoof-bold' }}
    >
      touch.
    </Heading>
  </Heading>
);

const SubHeadline = () => (
  <Paragraph
    // as='h5'
    type='lead'
    // variant='lead'
    sx={{
      gridRow: [2],
      gridColumn: ['2/span 10', '3/span 8', '2/16', '7/18', '1/10', '2/8'],
      textAlign: ['center', 'center', 'left', 'center', 'left', 'left'],
      mb: ['80px'],
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
        'translateY(-60%)',
        'translateY(-60%)',
        'translateY(-75%)',
        'translateY(-80%)',
        'translateY(-130%)',
        'translateY(-120%)',
      ],
      marginTop: ['-110%', '-110%', '0%', '-10%', '0%', '-200%'],
      height: ['80px', '80px', '136.74px', '80px', '136.74px'],
      width: ['22.85px', '22.85px', '39.05px', '22.85px', '39.05px'],
      zIndex: 3,
    }}
  >
    <Image src={contactVector} alt='' sx={{ height: '100%' }} />
  </Box>
);

/* ----------------- FormWrapper ----------------- */

const FormWrapper = (props) => (
  <GridItem
    variant='fullWidth'
    sx={{
      gridRow: [3, 3, 3, 3, '1 / span 2', '2 / span 1'],
      gridColumn: ['1/13', '1/13', '6/25', '1/25', '12/25', '11/24'],
      width: ['100vw', 'unset', 'unset', 'unset', 'unset', 'unset'],
      ml: [null, 0, 0, 0, 0, 0],
    }}
  >
    <GridWrapper
      variant='inside.autoColumns'
      as='form'
      sx={{
        bg: 'formBg',
        borderRadius: 'form',
        justifyContent: ['center', 'left', 'left', 'left', 'left', 'left'],
        pt: ['32px', '37px', '37px', '37px', '37px', '37px'],
        pb: ['40px', '48px', '48px', '48px', '48px', '48px'],
        marginBottom: ['-15%', '-25%', '-48%', '-28%', '-42%', '-50%'],
        zIndex: 2,
      }}
      {...props}
    />
  </GridItem>
);

/* ------------------ Form Fields ------------------ */

const NameInput = ({ value, inputChange }) => (
  <GridItem
    sx={{
      gridColumn: ['1/13', '2/12', '3/18', '3/13', '2/13', '1/7'],
    }}
  >
    <Label htmlFor='name' as='label' type='inputLabel'>
      Name
    </Label>
    <Input
      name='name'
      value={value.name}
      onChange={inputChange}
      placeholder='Rick Sanchez'
    />
  </GridItem>
);

const EmailInput = ({ value, inputChange }) => (
  <GridItem
    sx={{
      gridColumn: ['1/13', '2/12', '3/18', '14/23', '2/13', '7/12'],
    }}
  >
    <Label htmlFor='email' as='label' type='inputLabel'>
      Email
    </Label>
    <Input
      name='email'
      placeholder='sanchez@quince.com'
      value={value.email}
      onChange={inputChange}
    />
  </GridItem>
);

const Textarea = ({ value, inputChange }) => (
  <GridItem
    sx={{ gridColumn: ['1/13', '2/12', '3/18', '3/17', '2/13', '1/9'] }}
  >
    <Label htmlFor='description' as='label' type='inputLabel'>
      Your Business
    </Label>
    <Input
      as='textarea'
      variant='input'
      placeholder='Tell us a few lines about your business and your passion...'
      name='description'
      value={value.description}
      onChange={inputChange}
      sx={{
        mb: ['32px', '32px', '32px', '40px', '32px', '48px'],
        height: '144px',
      }}
    />
  </GridItem>
);

const FormParagraph = () => (
  <Paragraph
    as='p'
    type='formParagraph'
    sx={{
      gridColumn: ['1/span 11', '2/span 8', '3/15', '10/21', '2/10', '5/12'],
      gridRow: [5, 5, 5, 3, 5, 3],
      mt: ['34px', '35px', '35px', 0, '32px', '0'],
    }}
  >
    We don’t sell your email and just using it for direct mails to you.{' '}
    <span>No Newsletter involved.</span> For more information refer to our{' '}
    <span>
      <a href='/privacy-policy'>data privacy terms</a>
    </span>
    .
  </Paragraph>
);
