import React from 'react';
import { Label } from 'pieces/typography/elements';
import { Input } from 'pieces/elements';
import { GridItem } from 'pieces/grid';

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
