/* eslint-disable max-len */
export const breakpoints = [
  // Portrait - is added by theme-ui automatically
  // '@media screen and (min-width: 20em)', // 320px phone_portrait

  // Small
  '@media screen and (min-width: 500px)',

  // Medium
  '@media screen and (min-width: 750px) and (orientation: portrait)',
  '@media screen and (min-width: 700px) and (orientation: landscape)',

  // Large
  '@media screen and (min-width: 1000px)',

  // Xlarge
  '@media screen and (min-width: 1400px)',
];

export const pixelValues = [320, 500, 750, 700, 1000, 1400];

export const srcsetValues = [
  '(min-width: 500px)',
  '(min-width: 750px) and (orientation: portrait)',
  '(min-width: 700px) and (orientation: landscape)',
  '(min-width: 1000px)',
  '(min-width: 1400px)',
];
