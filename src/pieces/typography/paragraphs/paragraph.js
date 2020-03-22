/** @jsx jsx */
// external dependencies
import { jsx, useThemeUI } from 'theme-ui';
import { forwardRef } from 'react';
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
*/
export const Paragraph = forwardRef(
  ({ as, type = 'paragraph', variant = 'normal', maxchar, ...props }, ref) => {
    const { theme } = useThemeUI();

    // allows us to only specify `type=loud` but actually lookup loudParagraph in typographySetup.js
    const __themeKey = theme.typography[type]
      ? `typography.${type}`
      : `typography.${type}Paragraph`;

    return (
      <Box
        ref={ref}
        as={as ? motion[as] : motion.p}
        variant={variant}
        {...props}
        __themeKey={__themeKey}
        __css={{
          color:
            // check if there is a custom color in the theme
            theme.colors[type] && theme.colors[type][variant]
              ? `${type}.${variant}`
              : 'text',
        }}
      >
        <RichText
          maxchar={maxchar}
          content={props.children}
          Bold={({ children }) => (
            // checks if there are custom bold settings for the requested type within the theme
            <Emphasize
              sx={{
                color: `${
                  theme.colors[type] && theme.colors[type].bold
                    ? `${type}.bold`
                    : 'textBold'
                }`,
                variant: `typography.${type}.bold`,
              }}
            >
              {children}
            </Emphasize>
          )}
          Italic={({ children }) => (
            <Emphasize
              sx={{
                color: `${
                  theme.colors[type] && theme.colors[type].italic
                    ? `${type}.italic`
                    : 'textItalic'
                }`,
                variant: `typography.${type}.italic`,
              }}
            >
              {children}
            </Emphasize>
          )}
        />
      </Box>
    );
  }
);
