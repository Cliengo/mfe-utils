import { useEffect } from 'react';

/**
 * @example
 * useCustomEvent('some event name', (e) => {
 *  const event = e as CustomEvent<TheDetailType>;
 *
 *  someFunction(event.detail);
 * });
 */
export const useCustomEvent = (
  eventName: string,
  cb?: (e: Event) => void | Promise<void>,
  dependencies: unknown[] = []
) => {
  useEffect(() => {
    function callbackHandler(event: Event) {
      if (cb) {
        void cb(event);
      }
    }

    window.addEventListener(eventName, callbackHandler);

    return () => {
      window.removeEventListener(eventName, callbackHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
