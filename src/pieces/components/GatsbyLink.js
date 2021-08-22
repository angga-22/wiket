// external dependencies
/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { Box } from '@thepuzzlers/pieces';

// Set styling for active Link as follows
// in links.js (in theme)

// hyperlink : {
//   ... general styling here
//   '&.active' : {
//     ... styling for active Link here
//   }
// }

// This componenet is Gatsby specific!
export const GatsbyLink = forwardRef(
  (
    { active, to, children, variant, sx: { padding, p, ...sx }, ...props },
    ref
  ) => (
    <Box
      className={active ? 'active' : ''}
      ref={ref}
      as={motion.span}
      __themeKey='links'
      variant={variant}
      sx={sx}
      {...props}
    >
      <Link
        to={to}
        sx={{
          textDecoration: 'inherit',
          color: 'inherit',
          // We need to apply padding to link itself, to enlarge the clickable area
          padding: padding || p,
        }}
      >
        {children}
      </Link>
    </Box>
  )
);

GatsbyLink.propTypes = {
  active: PropTypes.boolean,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  sx: PropTypes.shape({
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    p: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

GatsbyLink.defaultProps = {
  active: false,
  variant: 'hyperLink',
  sx: {},
};
