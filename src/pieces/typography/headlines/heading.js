/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
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
export const Heading = forwardRef(
  ({ as, type = 'h1', variant = 'normal', maxchar, ...props }, ref) => {
    const { theme } = useThemeUI();
    return (
      <Box
        ref={ref}
        as={as ? motion[as] : motion[type]}
        variant={variant}
        {...props}
        __themeKey={`typography.${type}`}
        __css={{
          color:
            theme.colors[type] && theme.colors[type][variant]
              ? `${type}.${variant}`
              : 'heading',
        }}
      >
        <RichText
          maxchar={maxchar}
          content={props.children}
          Bold={({ children }) => (
            <Emphasize
              sx={{
                color: `${
                  theme.colors[type] && theme.colors[type].bold
                    ? `${type}.bold`
                    : 'headingBold'
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
