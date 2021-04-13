import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Label';
import { Input } from './Input';
import { GridItem } from './GridItem';

export const FormField = ({
  type = 'text',
  label,
  name,
  placeholder = '',
  required = false,
  sx,
  inputAs = undefined,
  inputVariant,
  ...props
}) => {
  const inputProps = {};
  // only add ass to input if inputAs is given (will break otherwise)
  if (inputAs) {
    inputProps.as = inputAs;
  }
  return (
    <GridItem sx={sx}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        variant={inputVariant}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        {...inputProps}
        {...props}
      />
    </GridItem>
  );
};

FormField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  sx: PropTypes.shape(),
  inputAs: PropTypes.string,
  inputVariant: PropTypes.string,
  required: PropTypes.bool,
};

FormField.defaultProps = {
  type: 'text',
  placeholder: '',
  sx: {},
  inputAs: undefined,
  inputVariant: undefined,
  required: false,
};
