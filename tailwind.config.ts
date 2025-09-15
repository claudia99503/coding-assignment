import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./pages/**/*.{ts,tsx,mdx}",
    "./public/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: "375px",
      md: "448px",
    },
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
        headingLg: ["clamp(20px, 5.3vw, 30px)", "1.2"], // 25.11px → 20px → 30px
        headingMd: ["clamp(17px, 4.5vw, 25px)", "1.2"], // 20.92px → 17px → 25px
        headingSm: ["clamp(16px, 4.3vw, 24px)", "1.2"], // 20px → 16px → 24px
        bodyBase: ["clamp(13px, 3.5vw, 19px)", "1.4"], // 16px → 13px → 19px
        bodySm: ["clamp(11px, 2.9vw, 17px)", "1.4"], // 14px → 11px → 17px
        bodyXs: ["clamp(10px, 2.7vw, 14px)", "1.4"], // 12px → 10px → 14px
        captionMd: ["clamp(12px, 3.2vw, 17px)", "1.3"], // 14.67px → 12px → 17px
        captionSm: ["clamp(8px, 2.1vw, 12px)", "1.3"], // 9.78px → 8px → 12px
        captionXs: ["clamp(7px, 1.8vw, 10px)", "1.3"], // 8.37px → 7px → 10px
        caption2Xs: ["clamp(6px, 1.6vw, 9px)", "1.3"], // 7.82px → 6px → 9px
        caption3Xs: ["clamp(6px, 1.6vw, 9px)", "1.3"], // 7.6px → 6px → 9px
      },
      spacing: {
        xs: "clamp(4px, 1.1vw, 5px)", // 5px → 4px → 6px
        sm: "clamp(6px, 1.6vw, 8px)", // 8px → 6px → 10px
        md: "clamp(8px, 2.1vw, 10px)", // 10px → 8px → 12px
        lg: "clamp(10px, 2.7vw, 13px)", // 13px → 10px → 15px
        xl: "clamp(13px, 3.5vw, 16px)", // 16px → 13px → 19px
        "2xl": "clamp(16px, 4.3vw, 20px)", // 20px → 16px → 24px
        "3xl": "clamp(20px, 5.3vw, 24px)", // 24px → 20px → 29px
        "4xl": "clamp(24px, 6.4vw, 29px)", // 29px → 24px → 35px
        "5xl": "clamp(32px, 8.5vw, 38px)", // 38px → 32px → 45px
      },
    },
  },
  plugins: [],
};

export default config;

