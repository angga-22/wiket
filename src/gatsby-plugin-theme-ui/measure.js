import { fullWidthLeftMinusMargins } from 'pieces/theme';

export const measure = {
  // fallback will force the gridItem to expand across the full width of the gridWrapper
  gridColumnFallback: {
    width: 'unset',
    marginLeft: 'unset',
    gridColumn: ['1/13', '1/13', '1/25', '1/25', '1/25'],
  },
  // Minus margin, to allow Grid Items inside of a proportional grid to be full width
  // use it on GridItem via the variant prop like so:
  // `variant="fullWidth"`
  fullWidth: {
    width: '100vw',
    marginLeft: fullWidthLeftMinusMargins,
    gridColumn: ['1/13', '1/13', '1/25', '1/25', '1/25'],
  },
  // custom presets for gridItems to expand across a certain width
  wide: {
    width: 'unset',
    marginLeft: 'unset',
    gridColumnStart: ['1'],
    gridColumnEnd: ['13', 'span 7', 'span 14', 'span 11', 'span 9'],
  },
  normal: {
    width: 'unset',
    marginLeft: 'unset',
    gridColumnStart: ['1'],
    gridColumnEnd: ['span 11', 'span 6', 'span 13', 'span 10', 'span 7'],
  },
  narrow: {
    width: 'unset',
    marginLeft: 'unset',
    gridColumnStart: ['1'],
    gridColumnEnd: ['span 10', 'span 5', 'span 10', 'span 9', 'span 5'],
  },
};
