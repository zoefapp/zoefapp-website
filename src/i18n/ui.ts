import { DEFAULT_LANG, type SupportedLanguage } from "./constants";

type LanguageMap = { [key in SupportedLanguage]: string }

export const languages: LanguageMap = {
  en: 'English',
  nl: 'Nederlands',
};


interface UiTranslations {
  'nav.home': string,
  'nav.about': string,
  'nav.twitter': string,
}

type RequireDefaultTranslations = {
  [K in SupportedLanguage]: K extends 'en' ? UiTranslations : Partial<UiTranslations>;
};

export type UiProperties = RequireDefaultTranslations;
export const ui: UiProperties = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.twitter': 'Twitter',
  },
  nl: {
    'nav.home': 'Home',
    'nav.about': 'Over ons',
  },
} as const;