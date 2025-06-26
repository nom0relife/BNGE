/**
 * Utility function to round a number to two decimal places.
 * @param num
 */
export const roundToTwoDecimalPlaces = (num: number): number => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};
