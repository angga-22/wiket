export const typographyConfig = {
  // left in for legal pages
  h3: {
    fontSizes: [33.6, 28.8, 37.6, 37.6, 44],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
  },
  // left in for legal pages
  h4: {
    fontSizes: [19.5, 24.5, 25.5, 18, 26.5, 28.5],
    fontFamily: 'primary',
    lineHeight: 1.25,
  },
  h5: {
    fontSizes: [19, 22, 24, 20.7, 23.3, 24],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
  },
  hyperLink: {
    fontSizes: [21.6, 19.2, 24.8, 24.8, 24],
    fontFamily: 'body',
    lineHeight: 'heading.safe',
  },
  buttonPrimary: {
    fontSizes: [16.8, 17.9, 19.1, 16.9, 18.5, 19.7],
    fontFamily: 'bodyBold',
    lineHeight: 1,
    letterSpacing: 0,
    color: 'textNegative',
  },
  buttonPrimarySmall: {
    fontSizes: [14.9, 16.1, 17.2, 15, 16.7, 17.8],
    fontFamily: 'bodyBold',
    lineHeight: 1,
    letterSpacing: 0,
    color: 'textNegative',
  },

  // Navigation
  navigationLink: {
    fontSizes: [20.5, 21.5, 30.6, 15, 14.8, 15.8],
    fontFamily: 'bodyBold',
    lineHeight: 'heading.safe',
  },
  openNavHeading: {
    fontSizes: [26.2, 28.7, 36.3, 26.3, 0, 0],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
    '&>span': {
      color: 'secondary',
      fontFamily: 'primary.bold',
    },
  },
  // Figma Text Styles
  h1: {
    fontSizes: [53.33, 64.75, 88.06, 53.57, 76.1, 96.89],
    fontFamily: 'primaryBold',
    lineHeight: 1,
    '&>b': {
      color: 'orange500',
    },
  },
  'h2-500': {
    fontFamily: 'primary',
    fontSizes: [30.88, 32.37, 42.11, 35.71, 40.83, 53.39],
    lineHeight: 1.25,
    '&>span': {
      fontFamily: 'primary.bold',
      color: 'secondary',
    },
  },
  'h5-500': {
    fontSizes: [15.91, 17.09, 16.27, 15.98, 15.78, 18.79],
    fontFamily: 'bodyBold',
    lineHeight: 1,
  },
  'h5-700': {
    fontSizes: [18.71, 19.78, 21.06, 18.8, 20.42, 21.75],
    fontFamily: 'bodyBold',
    lineHeight: 1,
  },
  'h3-500': {
    fontSizes: [23.39, 22.48, 23.93, 23.5, 23.2, 24.72],
    fontFamily: 'primaryBold',
    lineHeight: 1.25,
  },
  'body-300': {
    fontSizes: [14.97, 15.29, 16.27, 15.04, 14.85, 15.82],
    fontFamily: 'body',
    lineHeight: 1.25,
  },
  'body-500': {
    fontSizes: [16.84, 17.09, 18.19, 15.04, 17.63, 17.8],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  'body-700': {
    fontSizes: [18.71, 17.09, 19.14, 18.8, 18.56, 19.77],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  'body-1000': {
    fontSizes: [22.46, 21.58, 26.8, 18.8, 22.27, 27.68],
    fontFamily: 'primary',
    lineHeight: 1,
  },
  lead: {
    fontSizes: [18.71, 17.09, 19.14, 15.98, 18.56, 19.77],
    fontFamily: 'body',
    lineHeight: 1.5,
    '&>b': {
      fontFamily: 'body.bold',
    },
  },
  // Connections
  connectionsHeading: {
    fontSizes: [30.88, 32.3, 42.1, 35.7, 40.8, 53.3],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
    color: 'greenText',
    '&>span': {
      fontFamily: 'primary.bold',
    },
  },
  connectionsSectionHeading: {
    fontSizes: [24.3, 25.1, 30.6, 24.4, 27.8, 35.5],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
    '&>span': {
      fontFamily: 'primary.bold',
      color: 'secondary',
    },
  },
  connectionsNumber: {
    fontSizes: [112.2, 143, 153.1, 150.3, 148.4, 197.7],
    fontFamily: 'primaryBold',
    lineHeight: 'heading.safe',
    color: 'secondary',
  },
  // Contact Section
  inputText: {
    fontSizes: [14.97, 17.09, 19.14, 15.04, 16.7, 17.8],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  inputLabel: {
    color: 'teal1000',
    fontFamily: 'bodyBold',
    lineHeight: 1,
    fontSizes: [13.1, 14.39, 15.31, 13.16, 14.85, 15.82],
  },
  formParagraph: {
    fontSizes: [11.23, 12.59, 13.4, 11.28, 12.99, 14.83],
    fontFamily: 'body',
    lineHeight: 1.5,
    color: 'teal1000',
    '&>span': {
      fontFamily: 'body.bold',
    },
    '&>span>a': {
      color: 'teal1000',
      textDecoration: 'underline',
    },
  },
  smallParagraph: {
    fontSizes: [15, 12, 14, 11.5, 11.5, 13],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  featureList: {
    fontSizes: [16, 16, 16, 16, 19.6, 20],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  cardHeader: {
    fontSizes: [25, 28, 28, 24, 30, 22],
    fontFamily: 'primary',
    lineHeight: 1.5,
  },
  cardHeaderSmall: {
    fontSizes: [16, 17, 17, 16, 16, 16],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  pricingSectionNumber: {
    fontSizes: [18.71, 17.99, 19.14, 18.8, 18.56, 19.77],
    fontFamily: 'primaryBold',
    lineHeight: 'heading.safe',
    color: 'secondary',
  },
  footerParagraph: {
    fontSizes: [26.08, 24.86, 26.75, 26.21, 31.36, 43.5],
    fontFamily: 'primary',
    lineHeight: 1.5,
  },
};

export const lineHeights = {
  heading: {
    safe: 1,
    design: 1.25,
  },
  body: {
    safe: 1.75,
    design: 1.5,
  },
};
