export const getBody = () => {
  if (typeof document !== 'undefined') {
    return document.getElementsByTagName('body')[0];
  }
  return null;
};
