import { useEffect, RefObject } from 'react';

/**
 * Utility function to round a number to two decimal places.
 * @param num
 */
export const roundToTwoDecimalPlaces = (num: number): number => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

/**
 * Custom hook for detecting clicks outside a given ref.
 *
 * @param ref - React ref to an element (e.g. useRef)
 * @param callback - Function to call when click is outside the ref
 */
export function useClickOutside(ref: RefObject<HTMLElement | null>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
