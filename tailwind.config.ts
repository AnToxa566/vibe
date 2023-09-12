import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
  },
  plugins: [],
};
export default config;
