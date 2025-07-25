module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    extend: {
      container: {
        center: true,
        padding: "22px",
      },
      colors: {
        black: "#050505",
        red: "#C50D27",
        yellow: "#FFD802",
        gold: "#EEB704",
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
