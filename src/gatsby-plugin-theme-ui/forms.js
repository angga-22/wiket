export const forms = {
  input: {
    variant: 'typography.inputText.normal',
    color: 'inputText',
    backgroundColor: 'white',
    borderRadius: 'input',
    outline: 'none',
    mt: '8px',
    mb: '32px',
    py: '13px',
    px: '16px',
    '::placeholder': {
      color: 'inputText',
    },
  },
  label: {
    color: 'greenText',
    fontFamily: 'faible-bold',
    mb: '100px',
  },
  checkbox: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    height: ['32px', '38px', '32px'],
    width: ['32px', '38px', '32px'],
  },
};
