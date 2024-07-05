import type { DEFAULT_LANG, SupportedLanguages } from "./constants";
import { CheckClaimForm } from "~/components/ui/stations/_check";
/**
 * please ensure to only use string or function as value type
 */
export interface IRoutes {
  passenger: string;
  employer: string;
  "ticket-vendor": string;
  aboutUs: string;
  contact: string;
  privacy: string;
  terms: string;
  blogs: string;
  blog: (slug: string) => string;
  blogTag: (tag: string) => string;
  eligibilityCheck: (form?: CheckClaimForm) => string;
  euformPDFLanding: string; 
}

type Routes = { [DEFAULT_LANG]: IRoutes } & {
  [K in SupportedLanguages]: Partial<IRoutes>;
};
export const routes: Routes = {
  en: {
    'passenger': 'passenger',
    'employer': 'employer',
    'ticket-vendor': 'ticket-vendor',
    'aboutUs': 'about-us',
    'privacy': 'privacy',
    'contact': 'contact',
    'terms': 'terms-and-conditions',
    'blogs': 'article',
    "blog": (slug) => `article/${slug}`,
    blogTag: (tag) => `article/@${tag}`,
    eligibilityCheck: (_form) => `check/`, // ?departure=${form.departure}&arrival=${form.arrival}&date=${form.date.toISOString()},
    euformPDFLanding: 'ticket-vendor/euform',
  },
  nl: {
    'passenger': 'passagier',
    'employer': 'werkgever',
    'blogs': 'artikel',
    'ticket-vendor': 'ticketverkoper',
    'terms': 'algemene-voorwaarden',
    'aboutUs': 'over-ons',
    "blog": (slug) => `artikel/${slug}`,
    blogTag: (tag) => `artikel/@${tag}`,
    euformPDFLanding: 'ticketverkoper/euform',
  },
}
