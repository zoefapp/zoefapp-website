import type { AstroGlobal } from "astro";
import { DEFAULT_LANG, SUPPORTED_LANGUAGES, type SupportedLanguages } from "./constants";
import { routes } from "./routes";
import { ui } from "./ui";

function getLanguageFromUrl(astro: AstroGlobal): string | null {
    let lang = astro.url.pathname.split("/")[1];
    if (SUPPORTED_LANGUAGES.includes(lang)) return lang;
    return null;
}
function getLanguageFromHeaders(astro: AstroGlobal): string | null {
    return astro.request.headers.get("X-Site-Lang");
}

export function getLanguage(astro: AstroGlobal): string {
    let fromUrl = getLanguageFromUrl(astro);
    if (fromUrl !== null) return fromUrl;
    console.log(fromUrl, astro.url)
    let fromheader = getLanguageFromHeaders(astro);
    if (fromheader !== null) return fromheader;
    return DEFAULT_LANG
}

export function useTranslations(lang: SupportedLanguages) {
    return function t(key: keyof (typeof ui)[typeof DEFAULT_LANG]) {
        return ui[lang][key] || ui[DEFAULT_LANG][key];
    };
}

export function useRoutes(lang: SupportedLanguages) {
    return function t<K extends keyof (typeof routes)[typeof DEFAULT_LANG]>(
        key: K
    ): (typeof routes)[typeof DEFAULT_LANG][K] {
        let value = routes[lang][key] || routes[DEFAULT_LANG][key];
        let prefix = "/" + lang;

        if (typeof value === "function") {
            return function () {
                let result = (value as Function).apply(null, arguments);
                return prefix + "/" + result;
            } as any;
        }
        return `${prefix}/${value}` as any;
    };
}

export function useRoutesAstro(astro: AstroGlobal) {
    return useRoutes(getLanguage(astro));
}

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
        return `/${l}${path}`;
    };
}

export function translations(astro: AstroGlobal) {
    const lang = getLanguage(astro);
    return useTranslations(lang);
}