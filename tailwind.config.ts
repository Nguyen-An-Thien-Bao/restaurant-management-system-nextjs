import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: '',
                secondary: '',
                'primary-dark': '#171717',
                'secondary-dark': '#444444',
                'primary-red': '#DA0037',
                'primary-white': '#EDEDED',
                'secondary-white': '#FEFCF3',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
export default config;
