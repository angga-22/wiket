import React from 'react';
import { PrimaryButton } from './PrimaryButton';

// This Button gets the styles from the theme. (see `elements.js`)
// Extend if necessary
export const SecondaryButton = (props) => (
  <PrimaryButton variant='secondary' {...props} />
);
