import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        design2: {
          background: {
            main: "#0E1011",
            light: "#FFFFFF",
            dark: "rgba(41, 41, 41, 0.50)",
            secondary: "rgba(29, 29, 29, 0.75)",
          },
          text: {
            primary: {
              light: "#1D1D1D",
              dark: "#FFFFFF",
              lighter: "#FFFFFFCC",
              darker: "#000000",
            },
            secondary: "#D9D9D9",
            muted: "#989898",
          },
          accent: {
            primary: "#4167FF", // Vivid Blue
            secondary: "#E88B9C", // Muted Coral
            complement: "#A3DCD4", // Muted Aqua
          },
          neutral: {
            lightGray: "#F6F6F6",
            gray: "#D4D4D4",
            darkGray: "#989898",
            black: "#000000",
          },
          opacityVariants: {
            white80: "rgba(255, 255, 255, 0.8)",
            white75: "rgba(255, 255, 255, 0.75)",
            dark75: "var(--dark-card-secondary, rgba(29, 29, 29, 0.75))",
          },
        },

        primary: {
          main: "#FFFFFF",
          dark: "#FFFFFFE5",
          light: "#FFFFFF80",
        },
        grey: {
          main: "#1F1C1B",
          "80": "#1F1C1BCC",
        },
        background: {
          dark: "#0E0C0C",
          secondary: "#121110",
        },
        text: {
          main: "#1E1F25",
          secondary: "#FFFFFF",
          dark: "#FFFFFF99",
          white75: "#FFFFFFBF",
        },
      },
      fontFamily: { exo2: ["var(--exo2)"], paytone: ["var(--paytone)"] },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
};

export default config;
