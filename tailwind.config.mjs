/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                mulish: ["Mulish", "sans-serif"],
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
                brand: "var(--brand)",
                "orange-light": "var(--orange-light)",
                "orange-dark": "var(--orange-dark)",
                passenger: "var(--passenger)",
                passagier: "var(--passagier)",
                employer: "var(--employer)",
                werkgever: "var(--werkgever)",
                "ticket-vendor": "var(--ticket-vendor)",
                ticketverkoper: "var(--ticketverkoper)",
                blog: "var(--blog)",
            },
            textColor: {
                skin: {
                    base: "var(--color-text-base)",
                    secondary: "var(--color-text-secondary)",
                },
            },
        },
    },
    plugins: [],
};
