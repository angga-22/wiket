// No nesting!
// colors declarations can only be one level deep

const base = {
  background: '#fff',
  primary: 'green',
  secondary: '#000',
  disabled: '#000',
};

const textColors = {
  // defaults:
  text: '#000',
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
const neutrals = {
  //   main,
};

export const colors = {
  // defaults
  ...base,
  ...textColors,
  neutrals,
};
