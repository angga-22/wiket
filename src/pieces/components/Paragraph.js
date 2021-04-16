/* eslint-disable no-shadow */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useThemeUI } from 'theme-ui';
import { motion } from 'framer-motion';
// pieces components
import { RichText } from '../utils/typography';
import { Box } from './Box';
import { Emphasize } from './Emphasize';

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
      type,
      variant,
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
              variant={boldVariant || `${fullType}.bold`}
            >
              {children}
            </Emphasize>
          )}
          Italic={({ children }) => (
            <Emphasize
              color='textItalic'
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

Paragraph.propTypes = {
  as: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  boldVariant: PropTypes.string,
  italicVariant: PropTypes.string,
  maxchar: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  as: undefined,
  type: 'paragraph',
  variant: 'normal',
  boldVariant: undefined,
  italicVariant: undefined,
  maxchar: undefined,
};
