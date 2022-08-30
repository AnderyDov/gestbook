module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  themes: ["retro", "coffe"],
  plugins: [require("daisyui")],
  theme: {
    screens: {
      s: { max: "300px" },
      sm: { max: "642px" },
      "-sm": { min: "643px" },
    },
  },
};
