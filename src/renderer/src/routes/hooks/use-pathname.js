import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to extract the current pathname from the browser's location object.
 * @returns {string} The current pathname.
 */
export function usePathname() {
  const { pathname } = useLocation();
  return useMemo(() => pathname, [pathname]);
}
