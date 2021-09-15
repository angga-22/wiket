// No nesting! - colors declarations can only be one level deep
// No variables - you can't reference the colors by var name (e.g. 'primary') within this file

const base = {
  background: '#FFF8F0', // background
  primary: '#005650', // green
  secondary: '#FDA700', // orange
  disabled: '#000',

  // neutrals
  dark: '#000',
  light: '#FCF5DE',

  // accents
  accentPrimary: '#FFA722',
  accentSecondary: '#004E4C',
  buttonBackground: '#FDA700',
};

const textColors = {
  text: '#005650',
  brightText: '#FFFFFF',
  // textBold: 'red',
  // textItalic
  // heading: '#000',
  // headingBold: 'green',
  // headingItalic
  // labels: 'green',
};
export const colors = {
  // defaults
  ...base,
  ...textColors,
};
