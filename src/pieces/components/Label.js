/* eslint-disable no-shadow */
import React, { forwardRef } from 'react';
import { useThemeUI } from 'theme-ui';
import { motion } from 'framer-motion';
// pieces components
import { RichText } from 'pieces/utils/typography';
import { Box, Emphasize } from 'pieces';

// eslint-disable-next-line max-len
const capitalize = string => string.replace(/(?:^|\s)\S/g, a => a.toUpperCase());

export const Label = forwardRef(
  (
    {
      as,
      variant = 'normal',
      boldVariant,
      italicVariant,
      type = 'label',
      children,
      ...props
    },
    ref
  ) => {
    const { theme } = useThemeUI();
    // allows us to only specify `type=loud`
    // but actually lookup loudLabel in typographySetup.js
    const fullType = theme.typography[type] ? type : `label${capitalize(type)}`;

    return (
      <Box
        ref={ref}
        as={as ? as : motion.label}
        variant={variant}
        {...props}
        __themeKey={`typography.${fullType}`}
        __css={{
          color: 'labels',
        }}
      >
        <RichText
          content={children}
          Bold={({ children }) => (
            <Emphasize
              color='labelBold'
              variant={boldVariant ? boldVariant : `${fullType}.bold`}
            >
              {children}
            </Emphasize>
          )}
          Italic={({ children }) => (
            <Emphasize
              color='labelItalic'
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
