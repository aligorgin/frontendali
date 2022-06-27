module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            boxShadow: {
                'med': '0 9px 17px -2px rgba(0,0,0,0.25)',
                'med-hover': '0 7px 9px -2px rgba(0,0,0,0.25)'
            },
            colors: {
                'dark-red':'#dd2476',
                'light-orange':'#ff512f'
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
