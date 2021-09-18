const linkDefault = {
  cursor: 'pointer',
};

const buttonDefault = {
  cursor: 'pointer',
  transition: '0.2s ease-out',
  bg: 'accentPrimary',
  borderRadius: 'card',
  '&:hover': {
    transform: 'scale(1.1)',
  },
};

const links = {
  hyperLink: {
    ...linkDefault,
    variant: 'typography.hyperLink.bold',
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
  tertiary: {
    ...buttonDefault,
    variant: 'typography.buttonPrimary.normal',
    p: '16px 24px',
    borderRadius: 'button',
  },
  tertiarySmall: {
    ...buttonDefault,
    variant: 'typography.buttonPrimarySmall.normal',
    p: '12px 16px',
    borderRadius: 'button',
  },
};

const cards = {
  primary: {
    backgroundColor: 'light',
    borderRadius: 'card',
    padding: '20px',
  },
  horizontal: {
    backgroundColor: 'background',
    borderRadius: 'cardSecondary',
    boxShadow: 200,
    padding: '12px 24px 12px 12px',
    display: 'flex',
    position: 'relative',
    width: '100%',
    zIndex: 1,
  },
  vertical: {
    backgroundColor: 'background',
    borderRadius: 'cardSecondary',
    padding: '12px 12px 18px',
    position: 'relative',
    zIndex: 1,
  },
};

export const elements = {
  buttons,
  links,
  cards,
};
