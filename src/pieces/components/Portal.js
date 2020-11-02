import { createPortal } from 'react-dom';
import { usePortal } from 'pieces/utils/hooks';

/**
 * @example
 * <Portal id='container'>
 *   <p>Content in Portal</p>
 * </Portal>
 */
export const Portal = ({ id, children }) => {
  if (typeof window === 'undefined') return null;
  const target = usePortal(id);
  return createPortal(children, target);
};
