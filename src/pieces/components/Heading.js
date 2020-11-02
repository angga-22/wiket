/* eslint-disable no-shadow */
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { RichText } from 'pieces/utils/typography';
import { Box, Emphasize } from 'pieces';

/*
// Props
// type: lookup key for the theme.
//       Can be either full themeKey e.g. `smallParagraph` or short version
//       without appended "Paragraph": e.g. `small`
// as: html element to use. Defaults to `p`.
// maxchar: Maximum number of chars to display.
//          Will cut off after specified numner and append `...`
// variant: Font variant as specified in fontFamilies.js
//          Defaults to `normal`. Could be e.g. `bold`,...
// boldVariant: Typography variant  to be used for the bold styling
//              defaults to '<type>.bold'
// italicVariant: Typography variant  to be used for the italic styling
//              defaults to '<type>.italic'
*/
export const Heading = forwardRef(
  (
    {
      as,
      type = 'h1',
      variant = 'normal',
      boldVariant,
      italicVariant,
      maxchar,
      children,
      ...props
    },
    ref
  ) => (
    <Box
      ref={ref}
      as={as ? motion[as] : motion[type]}
      variant={variant}
      {...props}
      __themeKey={`typography.${type}`}
      __css={{
        color: 'heading',
      }}
    >
      <RichText
        maxchar={maxchar}
        content={children}
        Bold={({ children }) => (
          <Emphasize
            color='headingBold'
            variant={boldVariant ? boldVariant : `${type}.bold`}
          >
            {children}
          </Emphasize>
        )}
        Italic={({ children }) => (
          <Emphasize
            color='headingItalic'
            variant={italicVariant ? italicVariant : `${type}.italic`}
          >
            {children}
          </Emphasize>
        )}
      />
    </Box>
  )
);
