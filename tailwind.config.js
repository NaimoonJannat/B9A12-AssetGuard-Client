/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        underlineGrow: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'bottom right' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'bottom left' },
        },
        underlineShrink: {
          '0%': { transform: 'scaleX(1)', transformOrigin: 'bottom left' },
          '100%': { transform: 'scaleX(0)', transformOrigin: 'bottom right' },
        },
      },
      animation: {
        underlineGrow: 'underlineGrow 0.3s ease-out forwards',
        underlineShrink: 'underlineShrink 0.3s ease-out forwards',
      },
    },
  },
  plugins: [require("daisyui")],
}

