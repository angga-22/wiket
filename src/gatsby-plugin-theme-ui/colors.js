const base = {
  background: '#fff',
  primary: '#000',
  secondary: '#000',
  disabled: '#000',
};

const textColors = {
  // defaults:
  text: 'primary',
  // textBold
  heading: 'primary',
  // headingBold
  // ////
  // specific:
  // headlines
  // h2: {
  //   bold: 'green',
  // },
  // ...
};

const ctaColors = {
  buttons: {
    primary: {
      normal: 'primary',
      hover: 'secondary',
    },
  },
  links: {
    hyperLink: {
      normal: 'primary',
      hover: 'secondary',
    },
  },
};

const neutrals = {
  //   main,
};

export const colors = {
  // defaults
  ...base,
  ...ctaColors,
  ...textColors,
  neutrals,
};
