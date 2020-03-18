/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { RichText } from 'pieces/utils/typography';
import { Emphasize } from 'pieces/typography';
import { Box } from 'pieces/box';

export const Heading = forwardRef(
  ({ as, adoptStyling, maxchar, ...props }, ref) => {
    const { theme } = useThemeUI();
    const motionElement = as ? motion[as] : motion.h2;

    const tag = adoptStyling ? adoptStyling : as;

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
                  theme.colors[tag] && theme.colors[tag].bold
                    ? `${tag}.bold`
                    : 'headingBold'
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
