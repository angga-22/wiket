/* eslint-disable no-shadow */
import React, { forwardRef } from 'react';
import { useThemeUI } from 'theme-ui';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
// pieces components
import { RichText } from '../utils/typography';
import { Box } from './Box';
import { Emphasize } from './Emphasize';

const capitalize = (string) =>
  string.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

export const Label = forwardRef(
  (
    { as, variant, boldVariant, italicVariant, type, children, ...props },
    ref
  ) => {
    const { theme } = useThemeUI();
    // allows us to only specify `type=loud`
    // but actually lookup loudLabel in typographySetup.js
    const fullType = theme.typography[type] ? type : `label${capitalize(type)}`;

    return (
      <Box
        ref={ref}
        as={as || motion.label}
        variant={variant}
        {...props}
        __themeKey={`typography.${fullType}`}
        __css={{
          color: 'labels',
          zIndex: 'inherit',
        }}
      >
        <RichText
          content={children}
          Bold={({ children }) => (
            <Emphasize
              color='labelBold'
              variant={boldVariant || `${fullType}.bold`}
            >
              {children}
            </Emphasize>
          )}
          Italic={({ children }) => (
            <Emphasize
              color='labelItalic'
              variant={italicVariant || `${fullType}.italic`}
            >
              {children}
            </Emphasize>
          )}
        />
      </Box>
    );
  }
);

Label.propTypes = {
  as: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  boldVariant: PropTypes.string,
  italicVariant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Label.defaultProps = {
  as: undefined,
  type: 'primaryLabel',
  variant: 'normal',
  boldVariant: undefined,
  italicVariant: undefined,
};
