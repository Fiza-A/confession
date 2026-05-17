/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        rosePink: "#ff6b9d",
        softBlush: "#fff0f5",
        lavender: "#cdb4db",
        romanticRed: "#9d174d",
        creamWhite: "#fffafc",
        roseGold: "#d7a19c",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        script: ['"Great Vibes"', "cursive"],
        body: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px rgba(255, 107, 157, 0.45)",
        glass: "0 24px 80px rgba(157, 23, 77, 0.16)",
      },
    },
  },
  plugins: [],
};
