/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                mulish: ["Mulish", "sans-serif"],
                opensans: ["Open Sans", "sans-serif"],
            },
            screens: {
                "2xl": "1400px",
            },
            container: {
                center: true,
                padding: ".5rem",
                screens: {
                    xl: "1400px",
                },
            },
            colors: {
                brand: "hsla(var(--brand))",
                "orange-light": "hsla(var(--orange-light))",
                "orange-dark": "hsla(var(--orange-dark))",
                passenger: "hsla(var(--passenger))",
                passagier: "hsla(var(--passagier))",
                employer: "hsla(var(--employer))",
                werkgever: "hsla(var(--werkgever))",
                "ticket-vendor": "hsla(var(--ticket-vendor))",
                ticketverkoper: "hsla(var(--ticketverkoper))",
                article: "hsla(var(--blog))",
                artikel: "hsla(var(--blog))",
                aboutUs: "hsla(var(--about-us))",
                overUs: "hsla(var(--over-us))",
                "avatar-border": "hsla(var(--avatar-border))",
                skin: {
                    base: "hsla(var(--color-text-base))",
                    secondary: "hsla(var(--color-text-secondary))",
                    gradient: "hsla(var(--color-gradient))",
                },
            },
            textColor: {
                skin: {
                    base: "hsla(var(--color-text-base))",
                    secondary: "hsla(var(--color-text-secondary))",
                },
            },
            height: {
                compensation: "var(--compensation-height)",
            },
            boxShadow: {
                custom: "0px 4px 35px 0px hsla(0, 0%, 0%, 0.15);",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
