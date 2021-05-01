module.exports = {
  theme: {
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      bgDefaultTop: '#2cc1ff',
      bgDefaultBottom: '#143977'
    }),
    extend: {
      fontFamily: {
        burbank: ['Burbank Big Condensed black', 'system-ui'],
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular']
      },
      keyframes: {
        fish: {
          '0%, 100%': {
            transform: 'translateY(10px) scaleX(-1)'
          },
          '50%': {
            transform: 'translateY(-5px) scaleX(-1)'
          }
        }
      },
      animation: {
        fish: 'fish 5s ease-in-out infinite'
      }
    },
    screens: {
      extra: { max: '896px' },
      large: { max: '578px' },
      medium: { max: '287px' },
      small: { max: '287px' }
    }
  },
  plugins: []
}
