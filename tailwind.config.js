module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                'wiggle': 'wiggle 3s linear infinite',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'translateY(3px)' },
                    '50%': { transform: 'translateY(-3px)' },
                }
            },
            boxShadow: {
                'med-hover': '0 7px 9px -2px rgba(0,0,0,0.25)'
            },
            colors: {
                'dark-red': '#de1a1a',
                'light-orange': '#f67153',
                // 'dark-red':'#a40606',
                // 'light-orange':'#d98324',
                'dark-purple': '#285dac',
                'light-blue': '#0cbaba'
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
