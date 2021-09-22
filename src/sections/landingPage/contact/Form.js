// external dependencies
import React, { useState } from 'react';

// pieces
import {
  Label,
  Input,
  Button,
  Paragraph,
  GridWrapper,
  GridItem,
  Box,
  Heading,
  Image,
} from '@thepuzzlers/pieces';

// icons
import loadingSpinner from 'assets/svg/spinner-regular.svg';

// formSate
const WAITING_FOR_SUBMIT = 'waiting';
const SUBMITTING = 'submitting';
const ERROR = 'error';
const SUCCESS = 'success';

// Messages that are shown to the visitor
const messages = {
  [SUCCESS]: {
    headline: 'Thank you for signing up!',
    text: ' We will get in touch soon.',
  },
  [ERROR]: {
    headline: 'Error :/',
  },
  NetworkError: {
    headline: 'Network Error :/',
    text: 'Please check your internet connection and try again.',
  },
};

export const Form = () => {
  const [formState, setFormState] = useState({
    state: WAITING_FOR_SUBMIT,
  });

  const handleServerResponse = (ok, form, msg) => {
    if (ok) {
      setFormState({ state: SUCCESS, msg: messages[SUCCESS] });
      // Only rest form, if sending was successful
      form.reset();
    } else {
      setFormState({ state: ERROR, msg });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormState({ state: SUBMITTING });
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://getform.io/f/7389580f-4dff-415f-9145-a7ade84d5546', {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        // show loader a bit longer to avoid loading flash
        setTimeout(() => {
          handleServerResponse(true, form);
        }, 400);
      })
      .catch((error) => {
        setTimeout(() => {
          handleServerResponse(
            false,
            form,
            error?.response?.data?.error
              ? {
                  headline: messages[ERROR].headline,
                  text: error?.response?.data?.error,
                }
              : messages.NetworkError
          );
        }, 400);
      });
  };

  return (
    <FormWrapper onSubmit={handleOnSubmit}>
      <NameInput />
      <EmailInput />
      <Textarea />
      <Input name='spam_check' type='hidden' />
      <Button
        type='submit'
        variant='tertiary'
        sx={{
          gridColumn: ['1/7', '2/6', '3/9', '3/9', '2/8', '2/8'],
          gridRow: [4, 4, 4, 3, 4, 3],
          justifySelf: ['auto', 'auto', 'auto', 'auto', 'left', 'left'],
          alignSelf: 'start',
        }}
      >
        {formState.state === SUBMITTING ? <LoadingSpinner /> : 'Get started'}
      </Button>
      <FormParagraph />
      {formState.msg && (
        <FormMessage msg={formState.msg} setFormState={setFormState} />
      )}
    </FormWrapper>
  );
};

const LoadingSpinner = () => (
  <Box sx={{ height: (t) => t.typography.buttonPrimary.normal.fontSize }}>
    <Image alt='' sx={{ height: '100%' }} src={loadingSpinner} />
  </Box>
);

/* ----------------- FormWrapper ----------------- */

const FormWrapper = (props) => (
  <GridItem
    variant='fullWidth'
    sx={{
      gridRow: [3, 3, 3, 3, '1 / span 2', '2 / span 1'],
      gridColumn: ['1/13', '1/13', '6/25', '1/25', '12/25', '12/24'],
      width: ['100vw', 'unset', 'unset', 'unset', 'unset', 'unset'],
      ml: [null, 0, 0, 0, 0, 0],
    }}
  >
    <GridWrapper
      // GetFrom Configuraiton
      action='https://getform.io/f/7389580f-4dff-415f-9145-a7ade84d5546'
      method='POST'
      as='form'
      variant='inside.autoColumns'
      sx={{
        bg: 'blue100',
        borderRadius: 'form',
        justifyContent: ['center', 'left', 'left', 'left', 'left', 'left'],
        pt: ['32px', '37px', '37px', '37px', '37px', '37px'],
        pb: ['40px', '48px', '48px', '48px', '48px', '48px'],
        marginBottom: ['-15%', '-25%', '-48%', '-28%', '-42%', '-40%'],
        zIndex: 2,
      }}
      {...props}
    />
  </GridItem>
);

/* ----------------- FormWrapper ----------------- */

const FormMessage = ({ msg, setFormState }) => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      bg: 'blue100',
      borderRadius: 'form',
      textAlign: 'center',
    }}
  >
    <Heading type='h2' as='h5' variant='bold'>
      {msg.headline}
    </Heading>
    <Paragraph type='lead' as='p' sx={{ pt: '20px' }}>
      {msg.text}
    </Paragraph>
    <Button
      onClick={() => {
        setFormState({ state: WAITING_FOR_SUBMIT });
      }}
      variant='tertiarySmall'
      sx={{
        mt: '40px',
        color: 'teal1000',
        bg: 'blue100',
        border: (t) => `solid 2px ${t.colors.teal1000}`,
      }}
    >
      Close
    </Button>
  </Box>
);

/* ------------------ Form Fields ------------------ */

const NameInput = () => (
  <GridItem
    sx={{
      gridColumn: ['1/13', '2/12', '3/18', '3/13', '2/13', '2/7'],
    }}
  >
    <Label htmlFor='name' as='label' type='inputLabel'>
      Name
    </Label>
    <Input required name='name' type='text' placeholder='Rick Sanchez' />
  </GridItem>
);

const EmailInput = () => (
  <GridItem
    sx={{
      gridColumn: ['1/13', '2/12', '3/18', '14/23', '2/13', '7/12'],
    }}
  >
    <Label htmlFor='email' as='label' type='inputLabel'>
      Email
    </Label>
    <Input
      required
      name='email'
      type='email'
      placeholder='sanchez@quince.com'
    />
  </GridItem>
);

const Textarea = () => (
  <GridItem
    sx={{ gridColumn: ['1/13', '2/12', '3/18', '3/17', '2/13', '2/9'] }}
  >
    <Label htmlFor='description' as='label' type='inputLabel'>
      Your Business
    </Label>
    <Input
      required
      name='description'
      type='text'
      as='textarea'
      variant='input'
      placeholder='Tell us a few lines about your business and your passion...'
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
      gridColumn: ['1/span 11', '2/span 8', '3/15', '10/21', '2/10', '6/12'],
      gridRow: [5, 5, 5, 3, 5, 3],
      mt: ['34px', '35px', '35px', 0, '32px', '0'],
    }}
  >
    We don’t sell your email and are just using it for direct mails to you.{' '}
    <span>No Newsletter involved.</span> For more information refer to our{' '}
    <span>
      <a href='/privacy-policy'>data privacy terms</a>
    </span>
    .
  </Paragraph>
);
