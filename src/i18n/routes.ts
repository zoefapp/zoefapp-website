interface IRoutes {
    passenger: string,
    company: string,
    "ticket-vendor": string,
}

export const routes: { [key: string]: IRoutes } = {
    en: {
        'passenger': 'passenger',
        'company': 'company',
        'ticket-vendor': 'ticket-vendor',

    },
    nl: {
        'passenger': 'passagier',
        'company': 'bedrijf',
        'ticket-vendor': 'ticket-verkoper',
    },
}