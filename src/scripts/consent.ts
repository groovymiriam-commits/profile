export type Consent = { booking: boolean; search?: boolean };

const KEY = 'site-consent-v1';
const GOOGLE_VERIFICATION = 'TRvMlaDx2EOU0z25JKEoSJ7YKfUP9C08SFHbIfsi4t4';

export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

export function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(KEY, JSON.stringify(consent));
  } catch {
    // storage unavailable: the choice only applies to this page view
  }
  applyConsent(consent);
  window.dispatchEvent(new CustomEvent('consent-change', { detail: consent }));
}

export function applyConsent(consent: Consent) {
  // Cal.com is loaded on demand by the page script once booking consent exists.
  const existing = document.querySelector('meta[name="google-site-verification"]');
  if (consent.search && !existing) {
    const meta = document.createElement('meta');
    meta.name = 'google-site-verification';
    meta.content = GOOGLE_VERIFICATION;
    document.head.appendChild(meta);
  } else if (!consent.search && existing) {
    existing.remove();
  }
}

export function openConsentBanner() {
  window.dispatchEvent(new CustomEvent('consent-open'));
}
