import { ChangeEvent } from 'react';

/**
 * @description
 * A utility function to limit the number of characters in an input or textarea.
 * 
 * @param limit The maximum number of characters allowed.
 * @param e The change event from the input or textarea.
 * @param callback The callback function to call with the value of the input or textarea.
 * 
 * @example
 * const handleChange = (value: string) => {
 *   console.log(value);
 * };
 * 
 * withCharacterLimit(10, handleChange);
 */
export const withCharacterLimit = (
  limit: number,
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  callback: (e: unknown) => void
) => {
  if (e.target.value.length > limit) {
    return undefined;
  }

  callback(e.target.value);
};
