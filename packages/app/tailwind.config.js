let colors = require('tailwindcss/colors');
delete colors.lightBlue;
colors = { ...colors, ...{ transparent: 'transparent' } };

module.exports = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            burbank: ['Burbank Big Condensed', 'sans-serif', 'system-ui'],
            sans: ['ui-sans-serif', 'system-ui'],
            serif: ['ui-serif', 'Georgia'],
            mono: ['ui-monospace', 'SFMono-Regular']
        },
        screens: {
            1279: { max: '1279px' },
            767: { max: '767px' },
            320: { max: '320px' }
        },
        extend: {
            colors: {
                ...colors,
                primary: '#1780C1',
                darkbg: '#111111'
            }
        }
    },
    plugins: []
};
