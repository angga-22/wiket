// No nesting! - colors declarations can only be one level deep
// No variables - you can't reference the colors by var name (e.g. 'primary') within this file

const base = {
  background: '#fff',
  primary: 'green',
  secondary: '#000',
  disabled: '#000',

  // neutrals
  black: '#000000',
  dark: '#2D3133',
  medium: '#D1D4D7',
  light: '#F2F3F8',
};

const textColors = {
  text: '#000',
  // textBold: 'red',
  // textItalic
  heading: '#000',
  // headingBold: 'green',
  // headingItalic
  // labels: 'green',
};
export const colors = {
  // defaults
  ...base,
  ...textColors,
};
