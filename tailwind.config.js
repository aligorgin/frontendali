module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-light': '#e9247d',
                'primary-dark': '#05999e',
                'secondary-light': '#36252b',
                'secondary-dark': '#cbe7e3',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
