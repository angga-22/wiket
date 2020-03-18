/** @jsx jsx */
// external dependencies
import { jsx, useThemeUI } from 'theme-ui';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
// pieces components
import { RichText } from 'pieces/utils/typography';
import { Emphasize } from 'pieces/typography';
import { Box } from 'pieces/box';

export const Paragraph = forwardRef(
  ({ as, adoptStyling, maxchar, ...props }, ref) => {
    const { theme } = useThemeUI();
    const motionElement = as ? motion[as] : motion.p;
    // lookup key for the theme
    const tag = 'paragraph';

    return (
      <Box
        ref={ref}
        as={motionElement}
        variant='normal'
        {...props}
        __themeKey={`typography.${tag}`}
        __css={{
          color:
            theme.colors[tag] && theme.colors[tag].normal
              ? `${tag}.normal`
              : undefined,
        }}
      >
        <RichText
          maxchar={maxchar}
          content={props.children}
          Bold={({ children }) => (
            // checks if there are custom bold settings for the requested tag within the theme
            <Emphasize
              sx={{
                color: `${
                  theme.colors[tag] && theme.colors[tag].bold
                    ? `${tag}.bold`
                    : 'textBold'
                }`,
                variant: `typography.${tag}.bold`,
              }}
            >
              {children}
            </Emphasize>
          )}
          Italic={({ children }) => (
            <Emphasize
              sx={{
                color: `${tag}.italic`,
                variant: `typography.${tag}.bold`,
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
