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
    "stats.first": string;
    "stats.second": string;
    "stats.third": string;
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
    "footer.link.about.aboutus": string;
    "footer.link.about.blog": string;
    "footer.link.about.contact": string;
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
        "nav.cta": "Check for Compensation",
        "passenger.title": "Train delayed? \n Get your money back!",
        "passenger.description": "The platform for claiming compensation for train delays in public transport",
        "employer.title": "Train delayed? \n Get your money back!",
        "employer.description": "The platform for claiming compensation for train delays in public transport",
        "ticket-vendor.title": "Train delayed? \n Get your money back!",
        "ticket-vendor.description": "The platform for claiming compensation for train delays in public transport",
        "stats.first": "Trains delayed",
        "stats.second": "Trains delayed",
        "stats.third": "Trains delayed",
        "compensation.title": "<strong>Check</strong> if you are entitled to <strong>a claim</strong>",
        "compensation.departure": "Departure Station",
        "compensation.departure.placeholder": "e.g. Amsterdam Central",
        "compensation.arrival": "Destination Station",
        "compensation.arrival.placeholder": "e.g. Maastricht North",
        "compensation.time": "Time",
        "compensation.time.placeholder": "Friday 15 Feb. 11:05",
        "compensation.cta": "Check my compensation",
        "accompaniment.title": "What we've <strong>already achieved</strong>",
        "accompaniment.first": "Euros refunded to our users",
        "accompaniment.second": "People have already filed a claim with Zoef",
        "accompaniment.third": "Minutes of delay compensated with Zoef since November",
        "howzoefworks.title": "How Zoef works",
        "howzoefworks.first.title": "Enter your delay",
        "howzoefworks.first.description": "Specify how long your delay lasted, what your departure station was, where you wanted to go, and on which day and time you departed.",
        "howzoefworks.second.title": "Choose your journey",
        "howzoefworks.second.description": "Select from the list the train journey where you experienced a delay.",
        "howzoefworks.third.title": "Enter your details",
        "howzoefworks.third.description": "Let us know your name, public transport card number, and email address, and the bank account to which we may deposit your compensation.",
        "testimonials.title": "What our customers say",
        "faqs.title": "Frequently asked <strong>questions</strong>",
        "faqs.side.title": "Have another question?",
        "faqs.side.description": "If your question isn't answered, please contact us using the button below.",
        "faqs.side.cta": "Contact Us",
        "blogs.title": "Read more in <strong>our blogs</strong>",
        "blogs.cta": "View all blogs",
        "store.title": "Download the app",
        "store.description": "Are you familiar with our handy app? With this app, you can easily file your claim for a train delay. Don't wait any longer and download it right away!",
        "footer.newsletter.title": "Subscribe to our newsletter to stay updated on features and releases.",
        "footer.newsletter.consent": "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
        "footer.link.product.title": "The product for:",
        "footer.link.product.first": "Passengers",
        "footer.link.product.second": "Companies",
        "footer.link.product.third": "Ticket Sellers",
        "footer.link.about.title": "About Us",
        "footer.link.about.aboutus": "About Us",
        "footer.link.about.blog": "Blog",
        "footer.link.about.contact": "Contact",
        "footer.socials.title": "Follow Us",
        "footer.copyright": "Copyright © 2019 Zoef. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.cookies": "Cookies",
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
        "passenger.description": "De tool om compensatie aan te vragen voor vertraagde OV-treinreizen",
        "employer.title": "Trein vertraagd? \n Vraag je geld terug!",
        "employer.description": "De tool om compensatie aan te vragen voor vertraagde OV-treinreizen",
        "ticket-vendor.title": "Trein vertraagd? \n Vraag je geld terug!",
        "ticket-vendor.description": "De tool om compensatie aan te vragen voor vertraagde OV-treinreizen",
        "stats.first": "Hoeveelheid compensaties",
        "stats.second": "Hoeveelheid compensaties",
        "stats.third": "Hoeveelheid compensaties",
        "compensation.title": "<strong>Bekijk</strong> of je recht hebt op <strong>een claim</strong>",
        "compensation.departure": "Vertrekstation",
        "compensation.departure.placeholder": "bijv. Amsterdam Centraal",
        "compensation.arrival": "Gewenst station",
        "compensation.arrival.placeholder": "bijv. Maastricht Noord",
        "compensation.time": "Tijd",
        "compensation.time.placeholder": "Vrijdag 15 Feb. 11:05",
        "compensation.cta": "Check mijn vergoeding",
        "accompaniment.title": "Wat we <strong>al bereikt</strong> hebben",
        "accompaniment.first": "Euro terug gestort naar onze gebruikers",
        "accompaniment.second": "Mensen hebben al een claim ingediend bij Zoef",
        "accompaniment.third": "Minuten vertraging gecompenseerd met Zoef sinds November",
        "howzoefworks.title": "Hoe Zoef werkt",
        "howzoefworks.first.title": "Vul je vertraging in",
        "howzoefworks.first.description":
            "Geef aan hoe lang je vertraging ongeveer duurde, wat je vertrekstation was, waar je naartoe wilde en op welke dag en tijd je vertrok.",
        "howzoefworks.second.title": "Kies jouw reis",
        "howzoefworks.second.description":
            "Selecteer in de lijst de treinreis waar jij vertraging opliep.",
        "howzoefworks.third.title": "Vul je gegevens in",
        "howzoefworks.third.description":
            "Laat ons weten wat je naam, OV-kaartnummer en email-adres zijn en op welke bankrekening wij jouw vergoeding mogen storten.",
        "testimonials.title": "Wat onze klanten noemen",
        "faqs.title": "Frequently asked <strong>questions</strong>",
        "faqs.side.title": "Heb je een andere vraag?",
        "faqs.side.description":
            "Staat een antwoord op jouw vraag er niet bij? Neem dan contact op via de knop hieronder",
        "faqs.side.cta": "Neem contact op",
        "blogs.title": "Lees meer in <strong>onze blogs</strong>",
        "blogs.cta": "Bekijk all blogs",
        "store.title": "Download de app",
        "store.description":
            "Ben je al bekend met onze handige app? Met deze app kun je jouw claim voor een treinvertraging veel eenvoudiger indienen. Wacht niet langer en download hem meteen!",
        "footer.newsletter.title":
            "Schrijf je in voor onze nieuwsbrief om op de hoogte te blijven van features en releases.",
        "footer.newsletter.consent":
            "Door u te abonneren gaat u akkoord met ons Privacybeleid en geeft u toestemming om updates van ons bedrijf te ontvangen.",
        "footer.link.product.title": "Het product voor:",
        "footer.link.product.first": "Passagiers",
        "footer.link.product.second": "Bedrijven",
        "footer.link.product.third": "Ticket Verkopers",
        "footer.link.about.title": "Over ons",
        "footer.link.about.aboutus": "Over ons",
        "footer.link.about.blog": "Blog",
        "footer.link.about.contact": "Contact",
        "footer.socials.title": "Volg Ons",
        "footer.copyright": "Copyright © 2019 Zoef. Alle rechten voorbehouden.",
        "footer.privacy": "Privacybeleid",
        "footer.terms": "Algemene voorwaarden",
        "footer.cookies": "Cookies",
    },
} as const;
