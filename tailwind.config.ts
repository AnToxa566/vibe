import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regular-grey": "#5a5a5a",
        "dark-grey": "#454545",
        "muted-grey": "#87878726",
      },
      padding: {
        "inner-container": "3.5rem",
      },
      fontSize: {
        desktop: "1.25rem",
        mobile: ["0.875rem", "120%"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
