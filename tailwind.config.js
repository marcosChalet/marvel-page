/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    safelist: [{ pattern: /(bg|to|from)-(transparent|black)/ }],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
