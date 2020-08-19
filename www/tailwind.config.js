const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      mono: [
        "Menlo",
        "Monaco",
        '"Lucida Console"',
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      colors: {
        "gray-950": "#131720",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        "0.5": "0.20rem",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
  },
  purge: false,
};
