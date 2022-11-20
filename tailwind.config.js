/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      GoogleSansRegular: ["GoogleSansRegular", "sans-serif"],
      GoogleSansBold: ["GoogleSansBold", "sans-serif"],
    },
    extend: {
      colors: {
        'appBlack': '#1F1E1E',
        'oziGrey': '#1F1E1E4D',
        'lightGrey': '#959595',
        'tableLightGrey': '#F5F5F5',
        'greyPrimary': '#777777',
        'greyBorder': '#F7F7F7',
        'oziGreen': '#66C21E',
        'oziRed': '#B71111',
        'oziProgressGrey': '#D9D9D9',
        'oziPurple': '#6133E3',
        'oziYellow': '#E0C32A'
      },
      width: {
        '188': '188px',
        '215': '215px',
        '320': '320px',
        '150': '150px'
      },
      height: {
        '60': '60px',
      },
      lineHeight: {
        'extra-loose': '1.2',
      },
      zIndex: {
        '1024': '1024',
      }
    },
  },
  plugins: [],
}
