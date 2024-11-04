import { useEffect } from 'react';

interface Breadcrumb {
  label: string;
  url: string;
}

/**
 * @example
 * 
 * const breadcrumbs: Breadcrumb[] = [
 *   {
 *     label: 'Home',
 *     url: '/',
 *   },
 *   {
 *     label: 'About',
 *     url: '/about',
 *   },
 * ];
 * 
 * useBreadcrumbs(breadcrumbs);
 */
export const useBreadcrumbs = (breadcrumbs: Breadcrumb[]) => {
  useEffect(() => {
    const event = new CustomEvent('breadcrumbUpdate', { detail: breadcrumbs });
    window.dispatchEvent(event);

    // Optional cleanup if necessary
    return () => {
      // Clear breadcrumbs on unmount
      const clearEvent = new CustomEvent('breadcrumbUpdate', { detail: [] });
      window.dispatchEvent(clearEvent);
    };
  }, [breadcrumbs]);
};

