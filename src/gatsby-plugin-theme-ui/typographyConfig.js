export const typographyConfig = {
  h1: {
    factor: 2.5,
    fontSizes: [50, 65, 84, 51, 72, 94],
    fontFamily: 'primary',
    lineHeight: 1,
  },
  h2: {
    factor: 2.5,
    fontSizes: [27.5, 31, 41, 36, 41, 54],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
  },
  valuesH2: {
    factor: 2.5,
    // figma file to code array below
    // fontSizes: [30.73, 29.3, 31.52, 41.18, 40.59, 53.38],
    // Jeremy's calculation below
    fontSizes: [30.3, 32, 40.8, 35, 44, 52],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
    color: 'brightText',
  },
  h3: {
    factor: 2.5,
    fontSizes: [33.6, 28.8, 37.6, 37.6, 44],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
  },
  h4: {
    factor: 2.5,
    fontSizes: [19.5, 24.5, 25.5, 18, 26.5, 28.5],
    fontFamily: 'primary',
    lineHeight: 1.25,
  },
  valuesH4: {
    factor: 2.5,
    fontSizes: [23.28, 22.2, 23.88, 23.4, 23.06, 24.71],
    // Jeremy's calculation below
    // fontSizes: [24, 24.5, 25.5, 23, 26.5, 22],
    fontFamily: 'primary',
    lineHeight: 1.25,
    // color: 'brightText',
  },
  h5: {
    factor: 2.5,
    fontSizes: [19, 22, 24, 20.7, 23.3, 24],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
  },
  h6: {
    factor: 2.5,
    fontSizes: [16, 16, 19, 14.5, 16, 16],
    fontFamily: 'body',
    lineHeight: 1.1,
    letterSpacing: '0.5px',
  },
  navigationLink: {
    factor: 2.5,
    fontSizes: [26.4, 24, 31.2, 31.2, 36],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
  },
  hyperLink: {
    factor: 2.5,
    fontSizes: [21.6, 19.2, 24.8, 24.8, 24],
    fontFamily: 'body',
    lineHeight: 'heading.safe',
  },
  button: {
    factor: 2.5,
    fontSizes: [18, 16, 22, 22, 18],
    fontFamily: 'primary',
    lineHeight: 'heading.safe',
    letterSpacing: ['1px'],
  },
  buttonLarge: {
    factor: 2.5,
    fontSizes: [21.6, 19.2, 24.8, 24.8, 24],
    fontFamily: 'primary',
    lineHeight: 'heading.safe',
    letterSpacing: '1px',
  },
  label: {
    factor: 2.5,
    fontSizes: [15, 12, 15, 15, 15],
    fontFamily: 'primary',
    lineHeight: 'heading.design',
  },
  lead: {
    factor: 2.5,
    fontSizes: [19, 16, 20, 15, 17, 20],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  paragraph: {
    factor: 2.5,
    fontSizes: [19, 18, 20, 16, 15, 17],
    fontFamily: 'body',
    lineHeight: 1.5,
    color: 'primary',
  },
  valuesParagraph: {
    factor: 2.5,
    fontSizes: [16.76, 16.87, 15.28, 17.78, 17.53, 17.79],
    // Jeremy's calculation below
    // fontSizes: [17, 16, 20, 16, 15, 17],
    fontFamily: 'body',
    lineHeight: 1.5,
    // color: 'brightText',
  },
  paragraphSecondary: {
    factor: 2.5,
    fontSizes: [16.8, 17.7, 18, 14.5, 16, 18],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  smallParagraph: {
    factor: 2.5,
    fontSizes: [15, 12, 14, 11.5, 11.5, 13],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  benefitParagraph: {
    factor: 2.5,
    fontSizes: [17, 19, 19, 16, 16, 18],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  featureSubline: {
    factor: 2.5,
    fontSizes: [18, 19, 20, 16, 18, 20],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  featureList: {
    factor: 2.5,
    fontSizes: [16, 16, 16, 16, 19.6, 20],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  cardHeader: {
    factor: 2.5,
    fontSizes: [25, 28, 28, 24, 30, 22],
    fontFamily: 'primary',
    lineHeight: 1.5,
  },
  cardHeaderSmall: {
    factor: 2.5,
    fontSizes: [16, 17, 17, 16, 16, 16],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  cardParagraph: {
    factor: 2.5,
    fontSizes: [17, 17, 19, 16, 16, 16],
    fontFamily: 'body',
    lineHeight: 1.5,
  },
  footerParagraph: {
    factor: 2.5,
    fontSizes: [26.08, 24.86, 26.75, 26.21, 31.36, 43.5],
    fontFamily: 'body',
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

export const textDefaultSpans = {
  p: {
    primary: [
      {
        wide: 'span 12',
        base: 'span 10',
        narrow: 'span 8',
      },
      {
        wide: 'span 12',
        base: 'span 10',
        narrow: 'span 8',
      },
      {
        wide: 'span 16',
        base: 'span 10',
        narrow: 'span 8',
      },
      {
        wide: 'span 16',
        base: 'span 10',
        narrow: 'span 12',
      },
      {
        wide: 'span 13',
        base: 'span 11',
        narrow: 'span 8',
      },
      {
        wide: 'span 11',
        base: 'span 9',
        narrow: 'span 7',
      },
    ],
    secondary: [
      {
        wide: 'span 12',
        base: 'span 10',
        narrow: 'span 8',
      },
      {
        wide: 'span 12',
        base: 'span 9',
        narrow: 'span 7',
      },
      {
        wide: 'span 14',
        base: 'span 10',
        narrow: 'span 8',
      },
      {
        wide: 'span 15',
        base: 'span 12',
        narrow: 'span 8',
      },
      {
        wide: 'span 12',
        base: 'span 10',
        narrow: 'span 8',
      },
      {
        wide: 'span 12',
        base: 'span 7',
        narrow: 'span 5',
      },
    ],
  },
  h3: {
    primary: [
      {
        wide: 'span 12',
        base: 'span 10',
        narrow: 'span 8',
      },
      {
        wide: 'span 12',
        base: 'span 11',
        narrow: 'span 6',
      },
      {
        wide: 'span 20',
        base: 'span 18',
        narrow: 'span 16',
      },
      {
        wide: 'span 18',
        base: 'span 12',
        narrow: 'span 10',
      },
      {
        wide: 'span 16',
        base: 'span 10',
        narrow: 'span 8',
      },
      {
        wide: 'span 14',
        base: 'span 11',
        narrow: 'span 10',
      },
    ],
  },
  h4: {
    secondary: [
      {
        wide: 'span 12',
        base: 'span 11',
        narrow: 'span 8',
      },
      {
        wide: 'span 10',
        base: 'span 8',
        narrow: 'span 6',
      },
      {
        wide: 'span 17',
        base: 'span 11',
        narrow: 'span 10',
      },
      {
        wide: 'span 18',
        base: 'span 11',
        narrow: 'span 8',
      },
      {
        wide: 'span 12',
        base: 'span 8',
        narrow: 'span 7',
      },
      {
        wide: 'span 10',
        base: 'span 8',
        narrow: 'span 6',
      },
    ],
  },
};
