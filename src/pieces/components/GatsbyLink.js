// external dependencies
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { forwardRef } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { Box } from 'pieces';

// This componenet is Gatsby specific!
export const GatsbyLink = forwardRef(
  (
    {
      active = false,
      to,
      children,
      variant = 'hyperLink',
      sx: { padding, p, ...sx },
      ...props
    },
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
        // className={active ? 'active' : ''}
        to={to}
        // activeClassName='active'
        sx={{
          textDecoration: 'inherit',
          color: 'inherit',
          // We need to apply padding to link itself, to enlarge the clickable area
          padding: padding ? padding : p,
        }}
      >
        {children}
      </Link>
    </Box>
  )
);

// Set styling for active Link as follows
// in links.js

// hyperlink : {
//   ... general styling here
//   '&.active' : {
//     ... styling for active Link here
//   }
// }
