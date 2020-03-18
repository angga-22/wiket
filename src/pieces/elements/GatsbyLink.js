// external dependencies
import React, { forwardRef } from 'react';
// pieces components
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { Box } from 'pieces/box';

// This componenet is Gatsby specific!
export const GatsbyLink = forwardRef(({ to, children, ...props }, ref) => (
  <Box
    ref={ref}
    as={motion.span}
    variant='hyperLink'
    __themeKey='links'
    {...props}
  >
    <Link to={to} activeClassName='active'>
      {children}
    </Link>
  </Box>
));

// Set styling for active Link as follows
// in links.js

// hyperlink : {
//   ... general styling here
//   active : {
//     ... styling for active Link here
//   }
// }
