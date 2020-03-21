const links = {
  hyperLink: {
    variant: 'typography.hyperLink.normal',
    textDecoration: 'underline',
    ':hover,:focus,active': {
      color: 'primary',
    },
  },
  navigation: {
    variant: 'typography.navigationLink.normal',
  },
  footer: {
    variant: 'links.navigation',
    ':hover,:focus,.active': {
      color: 'primary',
    },
  },
};

const buttons = {
  primary: {
    variant: 'typography.buttonLarge.normal',
    height: '30px',
    ':hover': {
      bg: 'primary',
    },
  },
  secondary: {
    variant: 'typography.button.normal',
    ':hover': {
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
