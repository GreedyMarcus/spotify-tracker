import { useEffect, useState } from "react";

/**
 * Custom hook that detects whether the environment is the browser or not.
 */
export const useIsBroswer = () => {
  const [isBroswer, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return isBroswer;
};
