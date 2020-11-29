module.exports = {
  theme: {
    colors: {
      gray: {
        "100": "var(--gray-100)",
        "200": "var(--gray-200)",
        "300": "var(--gray-300)",
        "400": "var(--gray-400)",
        "500": "var(--gray-500)",
      },
      frost: {
        "100": "var(--frost-100)",
        "200": "var(--frost-200)",
        "300": "var(--frost-300)",
        "400": "var(--frost-400)",
      },
      font: {
        bold: "var(--font-bold)",
        muted: "var(--font-muted)",
      },
      accent: "var(--accent)",
      "accent-bright": "var(--accent-bright)",
      white: "var(--white)",
      black: "var(--black)",
      blue: "var(--blue)",
      red: "var(--red)",
      orange: "var(--orange)",
      yellow: "var(--yellow)",
      green: "var(--green)",
      purple: "var(--purple)",
    },
    extend: {
      // colors: {
      //   gray: {
      //     "100": "var(--gray-100)",
      //     "200": "var(--gray-200)",
      //     "300": "var(--gray-300)",
      //     "400": "var(--gray-400)",
      //     "500": "var(--gray-500)",
      //     "600": "var(--gray-600)",
      //     "700": "var(--gray-700)",
      //     "800": "var(--gray-800)",
      //     "900": "var(--gray-900)",
      //   },
      //   white: "var(--white)",
      //   black: "var(--black)",
      // },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-elevation")(["hover"], { opacityBoost: "0" }),
  ],
  purge: {
    enabled: false,
    content: ["./src/**/*.tsx"],
  },
  // ...
};
