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

  // Core
  orange200: '#FFE3AC',
  orange400: '#FFBA33',
  orange500: '#FDA700',
  teal700: '#007C7C',
  teal900: '#00615D',
  teal1000: '#005650',
  biege100: '#FFF8F0',

  // Text
  textPositive: '#002A26',
  textNegative: '#EDFDFB',

  // Support
  blue50: '#F9FBFB',
  blue100: '#E9F1F0',
  blue200: '#C2D6D3 ',
  blue300: '#ABC9C5',

  // form
  formBg: '#E9F1F0',
  white: '#FFFFFF',
};

const textColors = {
  text: '#005650',
  brightText: '#FFFFFF',
  lightText: '#FFFCF9',
  heading: '#005650', // teal1000
  // greenText: '#004E4C',
  inputText: '#C0C2C9',
};
export const colors = {
  // defaults
  ...base,
  ...textColors,
};
