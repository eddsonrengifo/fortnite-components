module.exports = {
  theme: {
    fontFamily: {
      burbank: 'Burbank Big Condensed black',
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      bgDefaultTop: '#2cc1ff',
      bgDefaultBottom: '#143977',
    }),
    extend: {
      colors: {},
    },
    screens: {
      extra: { max: '896px' },
      large: { max: '578px' },
      medium: { max: '287px' },
      small: { max: '287px' },
    },
  },
  plugins: [],
}
