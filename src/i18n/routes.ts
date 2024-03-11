import type { DEFAULT_LANG, SupportedLanguages } from "./constants";

/**
 * please ensure to only use string or function as value type
 */
export interface IRoutes {
  passenger: string;
  employer: string;
  "ticket-vendor": string;
  aboutUs: string;
  blog: (slug: string) => string;
  blogTag: (tag: string) => string;
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
    "blog": (slug) => `article/${slug}`,
    blogTag: (tag) => `article/@${tag}`,
  },
  nl: {
    'passenger': 'passagier',
    'employer': 'werkgever',
    'ticket-vendor': 'ticketverkoper',
    'aboutUs': 'over-ons',
    "blog": (slug) => `artikel/${slug}`,
    blogTag: (tag) => `artikel/@${tag}`,
  },
}