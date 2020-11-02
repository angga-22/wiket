import React from 'react';
import { Label, Input, GridItem } from 'pieces';

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
