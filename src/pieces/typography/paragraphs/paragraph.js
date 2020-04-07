/* eslint-disable no-shadow */
import React, { forwardRef } from 'react';
import { useThemeUI } from 'theme-ui';
import { motion } from 'framer-motion';
// pieces components
import { RichText } from 'pieces/utils/typography';
import { Emphasize } from 'pieces/typography';
import { Box } from 'pieces/box';

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
export const Paragraph = forwardRef(
  (
    {
      as,
      type = 'paragraph',
      variant = 'normal',
      boldVariant,
      italicVariant,
      maxchar,
      children,
      ...props
    },
    ref
  ) => {
    const { theme } = useThemeUI();

    // allows us to only specify `type=loud` but actually lookup loudParagraph in typographySetup.js
    const fullType = theme.typography[type] ? type : `${type}Paragraph`;

    return (
      <Box
        ref={ref}
        as={as ? motion[as] : motion.p}
        variant={variant}
        __themeKey={`typography.${fullType}`}
        {...props}
        __css={{
          color: 'text',
        }}
      >
        <RichText
          maxchar={maxchar}
          content={children}
          Bold={({ children }) => (
            <Emphasize
              color='textBold'
              variant={boldVariant ? boldVariant : `${fullType}.bold`}
            >
              {children}
            </Emphasize>
          )}
          Italic={({ children }) => (
            <Emphasize
              color='textItalic'
              variant={italicVariant ? italicVariant : `${fullType}.italic`}
            >
              {children}
            </Emphasize>
          )}
        />
      </Box>
    );
  }
);
