import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./pages/**/*.{ts,tsx,mdx}",
    "./public/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          base: "#F3F2EF",
        },
        text: {
          white: "#FFFFFF",
          gray: "#424242",
          black: "#000000",
        },
        saju: {
          surface: "#F5F3EC",
          border: "#1B2F49",
          divider: "#2B557E",
          cell: {
            dark: "#2F2F2F",
            red: "#C23030",
            teal: "#18868C",
            light: "#F9F9F9",
          },
        },
      },
      fontSize: {
        headingLg: "25.11px",
        headingMd: "20.92px",
        headingSm: "20px",
        bodyBase: "16px",
        bodySm: "14px",
        bodyXs: "12px",
        captionMd: "14.67px",
        captionSm: "9.78px",
        captionXs: "8.37px",
        caption2Xs: "7.82px",
        caption3Xs: "7.6px",
      },
    },
  },
  plugins: [],
};

export default config;
