import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#141612", // near-black text
        moss: "#3A5A40", // single green accent
        body: "#5A5D52", // body copy
        mute: "#6B6E64", // section labels
        dim: "#9A9A8C", // meta text
        line: "#DDDCD2", // hairlines
        "line-soft": "#E2E0D5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      keyframes: {
        kenburns: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.09)" },
        },
      },
      animation: {
        kenburns: "kenburns 30s ease-in-out infinite alternate",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
