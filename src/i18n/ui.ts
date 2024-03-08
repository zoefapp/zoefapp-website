import { DEFAULT_LANG, type SupportedLanguage, type SupportedLanguages } from "./constants";

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

// require the default properties' translations but not the other languages as they will fall back to the default translation
export type UiProperties = { [DEFAULT_LANG] : UiTranslations } & { [K in SupportedLanguages]: Partial<UiTranslations> }

export const ui: UiProperties = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.twitter': 'Twitter'
  },
  nl: {
    'nav.home': 'Home',
    'nav.about': 'Over ons'
  },
} as const;