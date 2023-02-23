/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      black: 'rgb(var(--color-black) / <alpha-value>)',
      blue: 'rgb(var(--color-blue) / <alpha-value>)',
      cyan: 'rgb(var(--color-cyan) / <alpha-value>)',
      green: 'rgb(var(--color-green) / <alpha-value>)',
      magenta: 'rgb(var(--color-magenta) / <alpha-value>)',
      red: 'rgb(var(--color-red) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
    },
    fontFamily: {
      sans: ['Roboto Mono', 'monospace']
    }
  },
  plugins: [],
  darkMode: "class"
}
