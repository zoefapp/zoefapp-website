export const DEFAULT_LANG = 'nl' as const
export const SUPPORTED_LANGUAGES = ['en', 'nl']

export type SupportedLanguages = typeof SUPPORTED_LANGUAGES[number];
export type SupportedLanguage = `${SupportedLanguages}`;