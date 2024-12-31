/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sl: "480px",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "12px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "30.25rem",
        },
      },
      colors: {
        black: "#272727",
        sajonGray: "rgba(39, 39, 39, 0.50);",
      },
      fontSize: {
        60: "60px",
      },
      lineHeight: {
        22: "22px",
      },
      letterSpacing: {
        "-0.4": "-0.4px",
      },
    },
  },
  plugins: [],
};
