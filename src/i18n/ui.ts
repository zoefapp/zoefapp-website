import { DEFAULT_LANG, type SupportedLanguage, type SupportedLanguages } from "./constants";
export type LanguageMap = { [key in SupportedLanguage]: string };

export const languages: LanguageMap = {
    en: "English",
    nl: "Nederlands",
};

export interface UiTranslations {
    "nav.dropdown.text": string;
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
    "faqs.title": string;
    "faqs.side.title": string;
    "faqs.side.description": string;
    "faqs.side.cta": string;
    "blogs.title": string;
    "blogs.cta": string;
    "store.title": string;
    "store.description": string;
    "footer.newsletter.title": string;
    "footer.newsletter.consent": string;
    "footer.link.product.title": string;
    "footer.link.product.first": string;
    "footer.link.product.second": string;
    "footer.link.product.third": string;
    "footer.link.about.title": string;
    "footer.link.about.first": string;
    "footer.link.about.second": string;
    "footer.link.about.third": string;
    "footer.socials.title": string;
    "footer.copyright": string;
    "footer.privacy": string;
    "footer.terms": string;
    "footer.cookies": string;
}

// require the default properties' translations but not the other languages as they will fall back to the default translation
export type UiProperties = { [DEFAULT_LANG]: UiTranslations } & {
    [K in SupportedLanguages]: Partial<UiTranslations>;
};

export const ui: UiProperties = {
    en: {
        "nav.dropdown.text": "I am:",
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
        "faqs.title": "Frequently <strong>asked questions</strong>",
        "faqs.side.title": "Need more help?",
        "faqs.side.description":
            "Carry they single-origin sold readymade LaCroix. Vexillologist dreamcatcher chic heard tbh.",
        "faqs.side.cta": "Contact us",
        "blogs.title": "Stay up to <strong>date with the NS</strong>",
        "blogs.cta": "Read our blogs",
        "store.title": "Cold-pressed biodiesel",
        "store.description":
            "Raclette shabby belly cornhole subway. Heirloom hella next gastropub enamel chillwave bicycle. Cronut butcher sartorial it normcore seitan cray.",
        "footer.newsletter.title": "Join our newsletter to stay up to date on features and releases",
        "footer.newsletter.consent":
            "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.",
        "footer.link.product.title": "The product for:",
        "footer.link.product.first": "Passengers",
        "footer.link.product.second": "Companies",
        "footer.link.product.third": "Ticket Vendors",
        "footer.link.about.title": "About us:",
        "footer.link.about.first": "About Us",
        "footer.link.about.second": "Blog",
        "footer.link.about.third": "Contact",
        "footer.socials.title": "Follow us",
        "footer.copyright": "© 2022 Zoef. All rights reserved",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.cookies": "Cookies Settings",
    },
    nl: {
        "nav.dropdown.text": "Ik ben:",
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
        "accompaniment.first": "Euro terug gestort naar onze gebruiker",
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
        "faqs.title": "Frequently <strong>asked questions</strong>",
        "faqs.side.title": "Meer hulp nodig?",
        "faqs.side.description":
            "Carry they single-origin sold readymade LaCroix. Vexillologist dreamcatcher chic heard tbh. ",
        "faqs.side.cta": "Neem contact op",
        "blogs.title": "Stuur <strong>updates naar de NS</strong>",
        "blogs.cta": "Bekijk all blogs",
        "store.title": "Koude kruiden",
        "store.description":
            "Raclette shabby belly cornhole subway. Heirloom hella next gastropub enamel chillwave bicycle. Cronut butcher sartorial it normcore seitan cray.",
        "footer.newsletter.title":
            "Schrijf je in voor onze nieuwsbrief om op de hoogte te blijven van features en releases.",
        "footer.newsletter.consent":
            "Door u te abonneren gaat u akkoord met ons Privacybeleid en geeft u toestemming om updates van ons bedrijf te ontvangen.",
        "footer.link.product.title": "Het product voor:",
        "footer.link.product.first": "Passagiers",
        "footer.link.product.second": "Bedrijven",
        "footer.link.product.third": "Ticket Verkopers",
        "footer.link.about.title": "Over Us",
        "footer.link.about.first": "Over Us",
        "footer.link.about.second": "Blog",
        "footer.link.about.third": "Contact",
        "footer.socials.title": "Volg Ons",
        "footer.copyright": "Copyright © 2019 Zoef. Alle rechten voorbehouden.",
        "footer.privacy": "Privacybeleid",
        "footer.terms": "Algemene voorwaarden",
        "footer.cookies": "Cookies",
    },
} as const;
