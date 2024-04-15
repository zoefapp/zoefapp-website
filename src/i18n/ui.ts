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
    "nav.contact.description": string;
    "nav.contact.cta": string;
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
    "testimonials.title": string;
    "blog.articles": string;
    "faqs.title": string;
    "faqs.side.title": string;
    "faqs.side.description": string;
    "faqs.side.cta": string;
    "blogs.title": string;
    "blogs.cta": string;
    "store.title": string;
    "store.description": string;
    "signup.title": string;
    "signup.description": string;
    "footer.newsletter.title": string;
    "footer.newsletter.consent": string;
    "newsletter.subscribe": string,
    "newsletter.email.placeholder": string,
    "newsletter.error": string,
    "newsletter.subscribed": string,
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
    "progress.hero.title": string;
    "progress.hero.description": string;
    "proggres.planned": string;
    "proggres.delayed": string;
    "proggres.delayed_description": string;
    "station.departure": string;
    "station.arrival": string;
    "station.estimated_arrival": string;
    "traveltime.normal": string;
    "traveltime.delayed": string;
    additional_transfers: string;
    standart_transfers: string;
    standard_travel_time: string;
    additional_travel_time: string;
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
        "nav.contact.description": "Do you think you are entitled to a claim?",
        "nav.contact.cta": "Contact Us",
        "passenger.title": "Train delayed? \n Get your money back!",
        "passenger.description": "The platform for claiming compensation for train delays in public transport",
        "employer.title": "Train delayed? \n Get your money back!",
        "employer.description": "The platform for claiming compensation for train delays in public transport",
        "ticket-vendor.title": "Train delayed? \n Get your money back!",
        "ticket-vendor.description": "The platform for claiming compensation for train delays in public transport",
        "stats.first": "Trains delayed",
        "stats.second": "Trains delayed",
        "stats.third": "Trains delayed",
        
        "compensation.title": "Check if you are entitled to a claim",
        "compensation.departure": "Departure Station",
        "compensation.departure.placeholder": "e.g. Amsterdam Central",
        "compensation.arrival": "Destination Station",
        "compensation.arrival.placeholder": "e.g. Maastricht North",
        "compensation.time": "Time",
        "compensation.time.placeholder": "Friday 15 Feb. 11:05",
        "compensation.cta": "Check my compensation",
        "accompaniment.title": "What we've already achieved",
        "accompaniment.first": "Euros refunded to our users",
        "accompaniment.second": "People have already filed a claim with Zoef",
        "accompaniment.third": "Minutes of delay compensated with Zoef since November",
        "howzoefworks.title": "How Zoef works",
        "testimonials.title": "What our customers say",
        "faqs.title": "Frequently asked questions",
        "faqs.side.title": "Have another question?",
        "faqs.side.description": "If your question isn't answered, please contact us using the button below.",
        "faqs.side.cta": "Contact Us",
        "blog.articles": "Articles",
        "blogs.title": "Read more in our blogs",
        "blogs.cta": "View all blogs",
        "store.title": "Download the app",
        "store.description":
            "Are you familiar with our handy app? With this app, you can easily file your claim for a train delay. Don't wait any longer and download it right away!",
        "signup.title": "Sign Up",
        "signup.description": "Get access to all of our features and get your compensation in minutes!",
        "newsletter.subscribe": "Subscribe",
        "newsletter.email.placeholder": "Enter your email",
        "newsletter.error": "An error occurred. Please try again.",
        "newsletter.subscribed": "Great! We've sent you an email, please check your inbox to confirm your subscription.",
        "footer.newsletter.title": "Subscribe to our newsletter to stay updated on features and releases.",
        "footer.newsletter.consent":
            "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
        "footer.link.product.title": "The product for:",
        "footer.link.product.first": "Passengers",
        "footer.link.product.second": "Companies",
        "footer.link.product.third": "Ticket Sellers",
        "footer.link.about.title": "About Us",
        "footer.link.about.aboutus": "About Us",
        "footer.link.about.blog": "Blog",
        "footer.link.about.contact": "Contact",
        "footer.socials.title": "Follow Us",
        "footer.copyright": `Copyright © ${(new Date()).getFullYear()} Zoef.app BV. All rights reserved.`,
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.cookies": "Cookies",
        "progress.hero.title": "You may be entitled to a refund!",
        "progress.hero.description": "Estimated delay: ",
        "proggres.planned": "Planned trip",
        "proggres.delayed": "Delayed travel",
        "proggres.delayed_description": "From our calculation we estimate that you took the following route:",
        "station.departure": "Departure station",
        "station.arrival": "Desired destination",
        "station.estimated_arrival": "Estimated arrival",
        "traveltime.normal": "Normal travel time: ",
        "traveltime.delayed": "Delayed travel time: ",
        additional_transfers: "Additional transfers",
        standart_transfers: "Standard transfers",
        standard_travel_time: "Standard travel time",
        additional_travel_time: "Additional travel time",
    },
    nl: {
        "nav.dropdown.text": "Ik ben:",
        "nav.link.passenger": "Passagier",
        "nav.link.employer": "Werkgever",
        "nav.link.ticket-vendor": "Ticketverkoper",
        "nav.link.about": "Over Ons",
        "nav.link.blog": "Blog",
        "nav.cta": "Check voor vergoeding",
        "nav.contact.description": "Denk je dat je recht hebt op een claim?",
        "nav.contact.cta": "Claim aanvragen",
        "passenger.title": "Trein vertraagd? \n Vraag je geld terug!",
        "passenger.description": "De tool om compensatie aan te vragen voor vertraagde OV-treinreizen",
        "employer.title": "Trein vertraagd? \n Vraag je geld terug!",
        "employer.description": "De tool om compensatie aan te vragen voor vertraagde OV-treinreizen",
        "ticket-vendor.title": "Trein vertraagd? \n Vraag je geld terug!",
        "ticket-vendor.description": "De tool om compensatie aan te vragen voor vertraagde OV-treinreizen",
        "stats.first": "Hoeveelheid compensaties",
        "stats.second": "Hoeveelheid compensaties",
        "stats.third": "Hoeveelheid compensaties",
        "blog.articles": "Artikelen",
        "compensation.title": "Bekijk of je recht hebt op een claim",
        "compensation.departure": "Vertrekstation",
        "compensation.departure.placeholder": "bijv. Amsterdam Centraal",
        "compensation.arrival": "Gewenst station",
        "compensation.arrival.placeholder": "bijv. Maastricht Noord",
        "compensation.time": "Tijd",
        "compensation.time.placeholder": "Vrijdag 15 Feb. 11:05",
        "compensation.cta": "Check mijn vergoeding",
        "accompaniment.title": "Wat we al bereikt hebben",
        "accompaniment.first": "Euro terug gestort naar onze gebruikers",
        "accompaniment.second": "Mensen hebben al een claim ingediend bij Zoef",
        "accompaniment.third": "Minuten vertraging gecompenseerd met Zoef sinds November",
        "howzoefworks.title": "Hoe Zoef werkt",
        "testimonials.title": "Wat onze klanten noemen",
        "faqs.title": "Frequently asked questions",
        "faqs.side.title": "Heb je een andere vraag?",
        "faqs.side.description":
            "Staat een antwoord op jouw vraag er niet bij? Neem dan contact op via de knop hieronder",
        "faqs.side.cta": "Neem contact op",
        "blogs.title": "Lees meer in onze blogs",
        "blogs.cta": "Bekijk all blogs",
        "store.title": "Download de app",
        "store.description":
            "Ben je al bekend met onze handige app? Met deze app kun je jouw claim voor een treinvertraging veel eenvoudiger indienen. Wacht niet langer en download hem meteen!",
        "signup.title": "Aanmelden",
        "signup.description": "Krijg toegang tot al onze functies en ontvang uw vergoeding in enkele minuten!",
        "footer.newsletter.title":
            "Schrijf je in voor onze nieuwsbrief om op de hoogte te blijven van features en releases.",
        "footer.newsletter.consent":
            "Door u te abonneren gaat u akkoord met ons Privacybeleid en geeft u toestemming om updates van ons bedrijf te ontvangen.",
        "newsletter.subscribe": "Meld aan",
        "newsletter.email.placeholder": "Vul je email in",
        "newsletter.error": "Er is een fout opgetreden. Probeer het later opnieuw.",
        "newsletter.subscribed": "Top! We hebben je een email gestuurd, check je inbox om je inschrijving te bevestigen.",
        "footer.link.product.title": "Het product voor:",
        "footer.link.product.first": "Passagiers",
        "footer.link.product.second": "Bedrijven",
        "footer.link.product.third": "Ticket Verkopers",
        "footer.link.about.title": "Over ons",
        "footer.link.about.aboutus": "Over ons",
        "footer.link.about.blog": "Blog",
        "footer.link.about.contact": "Contact",
        "footer.socials.title": "Volg Ons",
        "footer.copyright": `Copyright © ${(new Date()).getFullYear()} Zoef.app BV. Alle rechten voorbehouden.`,
        "footer.privacy": "Privacybeleid",
        "footer.terms": "Algemene voorwaarden",
        "footer.cookies": "Cookies",
        "progress.hero.title": "Jij hebt mogelijk recht op teruggave!",
        "progress.hero.description": "Geschatte vertraging: ",
        "proggres.planned": "Geplande reis",
        "proggres.delayed": "Vertraagde reis",
        "proggres.delayed_description": "Uit onze berekening schatten wij dat je de volgende route nam:",
        "station.departure": "Vertrek station",
        "station.arrival": "Gewenste bestemming",
        "station.estimated_arrival": "Mijn exit ",
        "traveltime.normal": "Normale reistijd: ",
        "traveltime.delayed": "Vertraagde reistijd: ",
        additional_transfers: "Extra overstap",
        standart_transfers: "Standaard overstap",
        standard_travel_time: "Standaard reistijd",
        additional_travel_time: "Extra reistijd",
    },
} as const;
