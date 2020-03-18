export const breakpoints = [
  // Portrait
  // '@media screen and (min-width: 20em)', // 320px phone_portrait
  '@media screen and (min-width: 32em) and (orientation: landscape)', // 512px phone_landscape
  '@media screen and (min-width: 40em) and (orientation: portrait)', // 720px tablet_portrait
  // Landscape
  '@media screen and (min-width: 63em) and (orientation: landscape)', // 1024px tablet_landscape
  '@media screen and (min-width: 80em)', // 1200px desktop_s
];

export const pixelValues = [320, 512, 640, 1024, 1280];
