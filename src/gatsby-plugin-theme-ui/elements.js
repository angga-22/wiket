const linkDefault = {
  cursor: 'pointer',
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
      color: 'medium',
    },
  },
  navigation: {
    ...linkDefault,
    variant: 'typography.navigationLink.normal',
    ':hover,:focus,&.active': {
      color: 'medium',
    },
  },
  footer: {
    ...linkDefault,
    variant: 'links.navigation',
    ':hover,:focus,&.active': {
      color: 'medium',
    },
  },
};

const buttons = {
  primary: {
    ...buttonDefault,
    variant: 'typography.buttonLarge.normal',
    bg: 'primary',
    borderRadius: 'button',
    padding: '10px',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  secondary: {
    ...buttonDefault,
    variant: 'typography.button.normal',
    bg: 'light',
    borderRadius: 'button',
    padding: '10px',
    '&:hover': {
      bg: 'medium',
    },
  },
};

const cards = {
  primary: {
    backgroundColor: 'light',
    borderRadius: 'card',
    padding: '20px',
  },
};

export const elements = {
  buttons,
  links,
  cards,
};
