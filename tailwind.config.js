/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#07090f",
          900: "#0b0f17",
          850: "#111624",
          800: "#161c2b",
          700: "#1f2636",
          600: "#2a3346",
        },
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0,0,0,0.6)",
        glow: "0 0 40px -10px rgba(99,102,241,0.5)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseRing: {
          "0%": { opacity: "0.6", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1.6)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
        floaty: "floaty 6s ease-in-out infinite",
        pulseRing: "pulseRing 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
