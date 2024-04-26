/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          40: "#e8e8e8",
          50: "#585858",
          60: "#282828",
          70: "#f0eff4ff",
          80: "#f3f3f3",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
        },
        yellow: {
          50: "#FEC601",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/slider1.jpg')",
        "pattern-2": "url('/geo.png')",
      },
      screens: {
        tx: "280px",
        xs: "320px",
        xh: "380px",
        xsl: "400px",
        smx: "450px",
        smd: "600px",
        mdx: "800px",
        mxl: "900px",
        lgx: "1150px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
      rightFull: {
        position: "absolute",
        right: "100%",
      },
    },
  },
  plugins: [],
};
