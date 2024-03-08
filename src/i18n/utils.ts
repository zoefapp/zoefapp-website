import { DEFAULT_LANG, SUPPORTED_LANGUAGES, type SupportedLanguages } from './constants';
import { ui } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    console.log(lang)
    if (SUPPORTED_LANGUAGES.includes(lang)) return lang;
    return DEFAULT_LANG;
}

export function useTranslations(lang: SupportedLanguages) {
    return function t(key: keyof typeof ui[typeof DEFAULT_LANG]) {
        return ui[lang][key] || ui[DEFAULT_LANG][key];
    }
}
