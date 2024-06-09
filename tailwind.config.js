/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F2F3FF',
        'custom-navbar': '#FFCDC7',
        'custom-footer': '#261D56',

        'custom-E1': '#FFDEC2',
        'custom-E2': '#FFCFD2',
        'custom-E3': '#F1C0E8',
        'custom-E4': '#CFBAF0',
        'custom-E5': '#A6C7F6',

        'custom-M1': '#FBD0AD',
        'custom-M2': '#FFBBBF',
        'custom-M3': '#F5B1E9',
        'custom-M4': '#CAAAFB',
        'custom-M5': '#8FBDFF',

        'custom-H1': '#FFC28E',
        'custom-H2': '#FD9EA4',
        'custom-H3': '#FFA3EE',
        'custom-H4': '#B687FF',
        'custom-H5': '#60AAF6',

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
};
