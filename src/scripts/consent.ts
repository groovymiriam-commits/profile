export type Consent = { fonts: boolean; booking: boolean };

const KEY = 'site-consent-v1';
const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Chewy&family=Fredoka:wght@400..700&display=swap';

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
  if (consent.fonts && !document.querySelector('link[data-consent-fonts]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONTS_URL;
    link.dataset.consentFonts = '';
    document.head.appendChild(link);
  }
}

export function openConsentBanner() {
  window.dispatchEvent(new CustomEvent('consent-open'));
}
