import React from 'react';
import { Link } from 'pieces/typography/elements';

// Links to an external webpage (opens in a new tab by default)
export const ExternalLink = (props, to) => (
  <Link href={to} target='_blank' {...props} />
);
