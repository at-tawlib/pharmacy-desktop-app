import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * A custom hook for accessing router functionalities in React components.
 * This hook provides methods for navigation such as going back, forward, reloading, pushing to a new location, and replacing the current location.
 * @returns {object} An object containing router methods.
 */
export function useRouter() {
  const navigate = useNavigate();

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href) => navigate(href),
      replace: (href) => navigate(href, { replace: true }),
    }),
    [navigate]
  );

  return router;
}
