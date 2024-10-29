// Create (Set) a cookie
export function setCookie(name: string, value: string, days?: number): void {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Read a cookie
export function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Update a cookie
export function updateCookie(name: string, value: string, days?: number): void {
  setCookie(name, value, days);
}

// Delete a cookie
export function deleteCookie(name: string): void {
  document.cookie = name + '=; Max-Age=-99999999;';
}

// Check if a cookie exists
export function cookieExists(name: string): boolean {
  return getCookie(name) !== null;
}
