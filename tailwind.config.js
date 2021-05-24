module.exports = {
  theme: {
    extend: {
      fontFamily: {
        burbankFont: ['Burbank Big Condensed', 'system-ui'],
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
    }
  },
  plugins: []
}
