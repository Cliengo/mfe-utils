/**
 * Type-safe cookie utilities
 */

/**
 * Get a cookie value by name
 * @param name Cookie name
 * @returns Cookie value or null if not found
 */
export const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
};

/**
 * Set a cookie with optional configuration
 * @param name Cookie name
 * @param value Cookie value
 * @param options Cookie options
 */
export const setCookie = (
  name: string,
  value: string,
  options: {
    days?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
  } = {}
): void => {
  const {
    days = 7,
    path = '/',
    domain,
    secure = true,
    sameSite = 'Lax'
  } = options;

  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  
  document.cookie = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    `expires=${expires}`,
    `path=${path}`,
    domain && `domain=${domain}`,
    secure && 'secure',
    `sameSite=${sameSite}`
  ].filter(Boolean).join('; ');
};

/**
 * Delete a cookie by name
 * @param name Cookie name
 * @param path Cookie path (should match the path used when setting)
 */
export const deleteCookie = (name: string, path = '/'): void => {
  setCookie(name, '', { days: -1, path });
};
