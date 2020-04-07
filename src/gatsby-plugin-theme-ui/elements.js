const linkDefault = {
  cursor: 'pointer',
  transition: '0.2s ease-out',
};
const buttonDefault = {
  cursor: 'pointer',
  transition: '0.2s ease-out',
};

const links = {
  hyperLink: {
    ...linkDefault,
    variant: 'typography.hyperLink.normal',
    textDecoration: 'underline',
    ':hover,:focus,active': {
      color: 'primary',
    },
  },
  navigation: {
    ...linkDefault,
    variant: 'typography.navigationLink.normal',
    ':hover,:focus,active': {
      color: 'primary',
    },
  },
  footer: {
    ...linkDefault,
    variant: 'links.navigation',
    ':hover,:focus,.active': {
      color: 'primary',
    },
  },
};

const buttons = {
  primary: {
    ...buttonDefault,
    variant: 'typography.buttonLarge.normal',
    height: '30px',
    '&:hover': {
      bg: 'primary',
    },
  },
  secondary: {
    ...buttonDefault,
    variant: 'typography.button.normal',
    '&:hover': {
      bg: 'primary',
    },
  },
};

const cards = {
  primary: {},
};

export const elements = {
  buttons,
  links,
  cards,
};
