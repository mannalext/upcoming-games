/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { devTrackingEnv } from '@/configuration';

export const trackEvent = (
  category: string,
  action: string,
  name?: string,
  value?: string,
): void => {
  if (!devTrackingEnv()) {
    if ((window as any)._paq) {
      (window as any)._paq.push([ 'trackEvent', category, action, name ?? '', value ?? '' ]);
    }
  }
};

export const setDocumentTitle = (title: string): void => {
  if (!devTrackingEnv()) {
    if ((window as any)._paq) {
      (window as any)._paq.push([ 'setDocumentTitle', title ]);
      (window as any)._paq.push([ 'trackPageView' ]);
    }
  }
};
