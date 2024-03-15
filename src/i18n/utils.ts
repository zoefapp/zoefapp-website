import type { AstroGlobal } from "astro";
import { DEFAULT_LANG, SUPPORTED_LANGUAGES, type SupportedLanguages } from "./constants";
import { routes } from "./routes";
import { ui } from "./ui";

export function getLangFromUrl(url: URL | string) {
    let lang = typeof url === "string" ? url : url.pathname.split("/")[1];
    if (SUPPORTED_LANGUAGES.includes(lang)) return lang;
    return DEFAULT_LANG;
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

// translate the current route to a given language
export function translateRoute(path: string, toLang: SupportedLanguages) {
    getLangFromUrl(path);
}

export function useRoutesAstro(astro: AstroGlobal) {
    return useRoutes(getLangFromUrl(astro.url));
}

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
        return `/${l}${path}`;
    };
}

export function translations(Astro: AstroGlobal) {
    const lang = getLangFromUrl(Astro.url);
    return useTranslations(lang);
}