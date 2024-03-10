import {
  DEFAULT_LANG,
  type SupportedLanguage,
  type SupportedLanguages,
} from "./constants";

export type LanguageMap = { [key in SupportedLanguage]: string };

export const languages: LanguageMap = {
  en: "English",
  nl: "Nederlands",
};

export interface UiTranslations {
    "nav.link.passenger": string;
    "nav.link.employer": string;
    "nav.link.ticket-vendor": string;
    "nav.link.about": string;
    "nav.cta": string;
    "passenger.title": string;
    "passenger.description": string;
    [key: string]: string;
}

// require the default properties' translations but not the other languages as they will fall back to the default translation
export type UiProperties = { [DEFAULT_LANG]: UiTranslations } & {
  [K in SupportedLanguages]: Partial<UiTranslations>;
};

export const ui: UiProperties = {
  en: {
    "nav.link.passenger": "Passenger",
    "nav.link.employer": "Employer",
    "nav.link.ticket-vendor": "Ticket Seller",
    "nav.link.about": "About Us",
    "nav.cta": "Check for compensation",
    "passenger.title": "Train delayed? \n Ask for your money back!",
    "passenger.description":
      "The tool for obtaining delayed public transport trips by train",
  },
  nl: {
    "nav.link.passenger": "Passagier",
    "nav.link.employer": "Werkgever",
    "nav.link.ticket-vendor": "Ticketverkoper",
    "nav.link.about": "Over Ons",
    "nav.cta": "Check voor vergoeding",
    "passenger.title": "Trein vertraagd? \n Vraag je geld terug!",
    "passenger.description":
      "De tool voor het verkrijgen van vertraagde \n OV-reizen met de trein",
  },
} as const;
