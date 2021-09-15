// No nesting! - colors declarations can only be one level deep
// No variables - you can't reference the colors by var name (e.g. 'primary') within this file

const base = {
  lightBackground: '#FFF8F0', // background
  primary: '#005650', // green
  secondary: '#FDA700', // yellow
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
  text: '#2E2E2E', // green
  lightText: '#FFFCF9',

  // textBold: 'red',
  // textItalic
  heading: '#2E2E2E',
  // headingBold: 'green',
  // headingItalic
  // labels: 'green',
};
export const colors = {
  // defaults
  ...base,
  ...textColors,
};
