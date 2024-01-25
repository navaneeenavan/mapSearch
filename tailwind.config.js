module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      oswald: ["'Oswald'", "sans-serif"],
      poppins: ["'Poppins'", "sans-serif"],
      jetbrains: ["'JetBrains Mono'", "monospace"]
    },
    extend:{
      backgroundImage:{
        '1':"url('../../public/assets/images/Event_Cards/1.png')",
        '2':"url('../../public/assets/images/Event_Cards/2.png')",
        '3':"url('../../public/assets/images/Event_Cards/3.png')",
        '4':"url('../../public/assets/images/Event_Cards/4.png')",
        '5':"url('../../public/assets/images/Event_Cards/5.png')",
        'register':"url('../../public/assets/images/Event_Cards/register.png')"
      }
    }
  },
  variants: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        blue: "#14213d",
        yellow: "#fca311",
        gray: "#e5e5e5",
        white: "#ffffff",
        cloud: "#a4a4a4",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
