module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                /* offset-x | offset-y | blur-radius | spread-radius | color */
                // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                'med': '0 9px 17px -2px rgba(0,0,0,0.25)',
                'med-hover': '0 7px 14px -2px rgba(0,0,0,0.25)'
            },
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
