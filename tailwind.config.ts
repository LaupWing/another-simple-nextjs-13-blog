import type { Config } from "tailwindcss"

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         colors: {
            "custom-red": "rgb(var(--custom-red) / <alpha-value>)",
            "custom-orange": "rgb(var(--custom-orange) / <alpha-value>)",
            "custom-green": "rgb(var(--custom-green) / <alpha-value>)",
            "custom-blue": "rgb(var(--custom-blue / <alpha-value>)",
            "custom-purple": "rgb(var(--custom-purple) / <alpha-value>)",
         },
         spacing: {
            "nav": "var(--nav-height)",
         },
         height: {
            "screen-no-nav": "calc(100vh - var(--nav-height))",
         }
      },
   },
   plugins: [],
}
export default config
