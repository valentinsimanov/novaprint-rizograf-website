export const EVENTS = {
  CTA_ORDER_CLICK: 'cta_order_click',
  PHONE_CLICK: 'phone_click',
  TELEGRAM_CLICK: 'telegram_click',
  EMAIL_CLICK: 'email_click',
  CONTACTS_COPY_CLICK: 'contacts_copy_click',
  ROUTE_CLICK: 'route_click',
  PRICE_SECTION_VIEW: 'price_section_view',
  CONTACTS_SECTION_VIEW: 'contacts_section_view',
} as const;

type EventName = typeof EVENTS[keyof typeof EVENTS];

interface EventParams {
  section?: string;
  cta_text?: string;
  contact_type?: string;
  device_type?: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: EventName, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  const enriched = {
    page_path: window.location.pathname,
    device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
    timestamp: new Date().toISOString(),
    ...params,
  };
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, enriched);
  }
}
