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
        my: ['261px', '381px', '181px', '407px', '395px', '395px'],
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
            gridColumn: ['1/7', '1/6', '1/7', '1/8', '1/8', '1/8'],
            mr: 'auto',
            mb: 'auto',
          }}
        >
          Get started
        </Button>
        <CheckboxContainer />
        <FormParagraph />
      </FormWrapper>
    </GridWrapper>
  );
});

/* ------------------ Text Section ------------------ */

const Headline = () => (
  <Heading
    as='h2'
    type='contactHeading'
    sx={{
      color: 'greenText',
      gridRow: [1],
      gridColumn: ['3/11', '4/10', '2/22', '6/20', '1/11', '2/11'],
      textAlign: ['center', 'center', 'left', 'center', 'left', 'left'],
      mb: 16,
    }}
  >
    Keep in{' '}
    <Box as='span' sx={{ fontFamily: 'spoof-bold' }}>
      touch!
    </Box>
  </Heading>
);

const SubHeadline = () => (
  <Heading
    as='h5'
    type='contactParagraph'
    sx={{
      color: 'greenText',
      gridRow: [2],
      gridColumn: ['2/12', '4/10', '2/19', '6/20', '1/11', '2/11'],
      textAlign: ['center', 'center', 'left', 'center', 'left', 'left'],
      mb: ['80px'],
    }}
  >
    <Box as='span' sx={{ fontFamily: 'spoof-bold' }}>
      Sign up now{' '}
    </Box>
    and get informed as soon as applications are open.
  </Heading>
);

const Vector = () => (
  <Box
    sx={{
      gridRow: [1, 1, 3, 1, 2, 2],
      gridColumn: ['11/12', '11/12', '19/21', '21/23', '22/23', '22/23'],
      justifySelf: ['baseline', 'baseline', 'end', 'end', 'baseline'],
      transform: [
        'translateY(-60%)',
        'translateY(-60%)',
        'translateY(-75%)',
        'translateY(-80%)',
        'translateY(-130%)',
        'translateY(-120%)',
      ],
      height: ['80px', '80px', '136.74px', '80px', '136.74px'],
      width: ['22.85px', '22.85px', '39.05px', '22.85px', '39.05px'],
      zIndex: 1,
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
      gridRow: [3, 3, 3, 3, '1 / span 2', '1 / span 2'],
      gridColumn: ['1/13', '1/13', '5/25', '1/25', '12/25', '12/24'],
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
        justifyContent: 'center',
        pt: ['32px', '37px', '37px', '37px', '37px', '37px'],
        pb: ['40px', '48px', '48px', '48px', '48px', '48px'],
      }}
      {...props}
    />
  </GridItem>
);

/* ------------------ Form Fields ------------------ */

const NameInput = ({ value, inputChange }) => (
  <GridItem
    sx={{
      gridColumn: ['1/13', '1/6', '1/10', '1/12', '1/6', '1/6'],
      width: ['100%', '109%', '100%', '100%', '109%', '109%'],
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
      gridColumn: ['1/13', '7/12', '10/19', '12/24', '7/12', '7/12'],
      justifySelf: 'end',
      width: ['100%', '109%', '100%', '100%', '109%', '109%'],
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
    sx={{ gridColumn: ['1/13', '1/12', '1/19', '1/24', '1/12', '1/12'] }}
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
        height: ['152px', '152px', '152px', '120px', '120px', '120px'],
      }}
    />
  </GridItem>
);

const FormParagraph = () => (
  <Paragraph
    type='formParagraph'
    sx={{
      gridColumn: ['3/13', '3/10', '3/12', '13/22', '2/9', '2/8'],
      gridRow: [5, 4, 4, 3, 4, 4],
      mt: ['34px', '35px', '35px', 0, '32px', '32px'],
    }}
  >
    We don’t sell your email and just using it for direct mails to you.{' '}
    <span>No Newsletter involved.</span> For more information refer to our{' '}
    <href>data privacy terms</href>.
  </Paragraph>
);

/* --------------- Checkbox --------------- */

const CheckboxContainer = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Box
      as='span'
      sx={{
        bg: 'greenText',
        border: 'none',
        borderRadius: 'input',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridColumn: ['1/3', '1/2', '1/2', '11/12', '1/2', '1/2'],
        gridRow: [5, 4, 4, 3, 4, 4],
        mt: ['34px', '35px', '35px', 0, '32px', '32px'],
        position: 'relative',
        height: ['32px', '38px', '32px'],
        width: ['32px', '38px', '32px'],
      }}
    >
      <input
        type='checkbox'
        onClick={handleToggle}
        onKeyUp={handleToggle}
        style={{
          cursor: 'pointer',
          opacity: 0,
          position: 'absolute',
          height: '32px',
          width: '32px',
        }}
      />
      <Box
        as='span'
        className='checkbox-control'
        onClick={handleToggle}
        onKeyUp={handleToggle}
        sx={{
          display: 'inline-block',
          width: '25px',
          height: '25px',
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25px'
          height='25px'
          viewBox='0 0 352.62 352.62'
          aria-hidden='true'
          focusable='false'
          style={{
            transition: 'transform 0.1s ease-in 25ms',
            transform: isActive ? 'scale(1)' : 'scale(0)',
            transformOrigin: 'bottom left',
          }}
        >
          <path
            fill='#FFA722'
            d='M337.222,22.952c-15.912-8.568-33.66,7.956-44.064,17.748c-23.867,23.256-44.063,50.184-66.708,74.664
            c-25.092,26.928-48.348,53.856-74.052,80.173c-14.688,14.688-30.6,30.6-40.392,48.96c-22.032-21.421-41.004-44.677-65.484-63.648
            c-17.748-13.464-47.124-23.256-46.512,9.18c1.224,42.229,38.556,87.517,66.096,116.28c11.628,12.24,26.928,25.092,44.676,25.704
            c21.42,1.224,43.452-24.48,56.304-38.556c22.645-24.48,41.005-52.021,61.812-77.112c26.928-33.048,54.468-65.485,80.784-99.145
            C326.206,96.392,378.226,44.983,337.222,22.952z M26.937,187.581c-0.612,0-1.224,0-2.448,0.611
            c-2.448-0.611-4.284-1.224-6.732-2.448l0,0C19.593,184.52,22.653,185.132,26.937,187.581z'
          />
        </svg>
      </Box>
    </Box>
  );
};
