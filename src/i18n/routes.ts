import type { DEFAULT_LANG, SupportedLanguages } from "./constants";

/**
 * please ensure to only use string or function as value type
 */
export interface IRoutes {
  passenger: string;
  employer: string;
  "ticket-vendor": string;
  blog: (slug: string) => string;
}

type Routes = { [DEFAULT_LANG]: IRoutes } & {
  [K in SupportedLanguages]: Partial<IRoutes>;
};
export const routes: Routes = {
  en: {
    passenger: "passenger",
    employer: "employer",
    "ticket-vendor": "ticket-vendor",
    blog: (slug) => `blog/${slug}`,
  },
  nl: {
    passenger: "passagier",
    employer: "werkgever",
    "ticket-vendor": "ticket-verkoper",
  },
};
