import { DEFAULT_LANG, type SupportedLanguage, type SupportedLanguages } from "./constants";
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
    "nav.link.blog": string;
    "nav.cta": string;
    "passenger.title": string;
    "passenger.description": string;
    "employer.title": string;
    "employer.description": string;
    "ticket-vendor.title": string;
    "ticket-vendor.description": string;
    "compensation.title": string;
    "compensation.departure": string;
    "compensation.departure.placeholder": string;
    "compensation.arrival": string;
    "compensation.arrival.placeholder": string;
    "compensation.time": string;
    "compensation.time.placeholder": string;
    "compensation.cta": string;
    "accompaniment.title": string;
    "accompaniment.first": string;
    "accompaniment.second": string;
    "accompaniment.third": string;
    "howzoefworks.title": string;
    "howzoefworks.first.title": string;
    "howzoefworks.first.description": string;
    "howzoefworks.second.title": string;
    "howzoefworks.second.description": string;
    "howzoefworks.third.title": string;
    "howzoefworks.third.description": string;
    "testimonials.title": string;
}

// require the default properties' translations but not the other languages as they will fall back to the default translation
export type UiProperties = { [DEFAULT_LANG]: UiTranslations } & {
    [K in SupportedLanguages]: Partial<UiTranslations>;
};

export const ui: UiProperties = {
    en: {
        "nav.link.passenger": "Passenger",
        "nav.link.employer": "Employer",
        "nav.link.ticket-vendor": "Ticket Vendor",
        "nav.link.about": "About Us",
        "nav.link.blog": "Blog",
        "nav.cta": "Check for compensation",
        "passenger.title": "Train delayed? \n Ask for your money back!",
        "passenger.description": "The tool for obtaining delayed public transport trips by train",
        "employer.title": "Train delayed? \n Ask for your money back!",
        "employer.description": "The tool for obtaining delayed public transport trips by train",
        "ticket-vendor.title": "Train delayed? \n Ask for your money back!",
        "ticket-vendor.description": "The tool for obtaining delayed public transport trips by train",
        "compensation.title": "See if you are <strong>entitled to a claim</strong>",
        "compensation.departure": "Departure",
        "compensation.departure.placeholder": "e.g. Amsterdam Central Station",
        "compensation.arrival": "Arrival",
        "compensation.arrival.placeholder": "Wed 15 Feb. 11:05",
        "compensation.time": "Time",
        "compensation.time.placeholder": "e.g. Maastricht North",
        "compensation.cta": "Get Compensation",
        "accompaniment.title": "What we <strong>already accomplished</strong>",
        "accompaniment.first": "Euros paid back to our users",
        "accompaniment.second": "People who have filed a claim with Zoef",
        "accompaniment.third": "Fixed minute delay with Zoef since November",
        "howzoefworks.title": "How Zoef works",
        "howzoefworks.first.title": "Carry they single-origin",
        "howzoefworks.first.description":
            "Carry they single-origin sold readymade LaCroix. Vexillologist dreamcatcher chic heard tbh. Yuccie marfa shaman affogato",
        "howzoefworks.second.title": "Carry they single-origin ",
        "howzoefworks.second.description":
            "Carry they single-origin sold readymade LaCroix. Vexillologist dreamcatcher chic heard tbh. Yuccie marfa shaman affogato",
        "howzoefworks.third.title": "Carry they single-origin ",
        "howzoefworks.third.description":
            "Carry they single-origin sold readymade LaCroix. Vexillologist dreamcatcher chic heard tbh. Yuccie marfa shaman affogato",
        "testimonials.title": "What our customers say",
    },
    nl: {
        "nav.link.passenger": "Passagier",
        "nav.link.employer": "Werkgever",
        "nav.link.ticket-vendor": "Ticketverkoper",
        "nav.link.about": "Over Ons",
        "nav.link.blog": "Blog",
        "nav.cta": "Check voor vergoeding",
        "passenger.title": "Trein vertraagd? \n Vraag je geld terug!",
        "passenger.description": "De tool voor het verkrijgen van vertraagde \n OV-reizen met de trein",
        "employer.title": "Trein vertraagd? \n Vraag je geld terug!",
        "employer.description": "De tool voor het verkrijgen van vertraagde \n OV-reizen met de trein",
        "ticket-vendor.title": "Trein vertraagd? \n Vraag je geld terug!",
        "ticket-vendor.description": "De tool voor het verkrijgen van vertraagde \n OV-reizen met de trein",
        "compensation.title": "Bekijk of je recht <strong>hebt op een claim</strong>",
        "compensation.departure": "Vertrekstation",
        "compensation.departure.placeholder": "bijv. Amsterdam Centraal",
        "compensation.arrival": "Gewenst station",
        "compensation.arrival.placeholder": "bijv. Maastricht Noord",
        "compensation.time": "Tijd",
        "compensation.time.placeholder": "Vrijdag 15 Feb. 11:05",
        "compensation.cta": "Check mijn vergoeding",
        "accompaniment.title": "Wat we al <strong>bereikt hebben</strong>",
        "accompaniment.first": "Euro terug gestort naar onze gebruikers",
        "accompaniment.second": "Mensen die een claim hebben ingediend bij Zoef",
        "accompaniment.third": "Minuten ertraging verholpen met Zoef sinds November",
        "howzoefworks.title": "Hoe Zoef werkt",
        "howzoefworks.first.title": "Carry they single-origin",
        "howzoefworks.first.description":
            "Carry they single-origin sold readymade LaCroix. Vexillologist dreamcatcher chic heard tbh. Yuccie marfa shaman affogato",
        "howzoefworks.second.title": "Carry they single-origin ",
        "howzoefworks.second.description":
            "Carry they single-origin sold readymade LaCroix. Vexillologist dreamcatcher chic heard tbh. Yuccie marfa shaman affogato",
        "howzoefworks.third.title": "Carry they single-origin ",
        "howzoefworks.third.description":
            "Carry they single-origin sold readymade LaCroix. Vexillologist dreamcatcher chic heard tbh. Yuccie marfa shaman affogato",
        "testimonials.title": "Wat onze klanten noemen",
    },
} as const;
