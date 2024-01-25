/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        //Primary
        'primary-orange': 'hsl(26, 100%, 55%)',
        'primary-pale-orange': 'hsl(25, 100%, 94%)',
        // neutral
        'neutral-dark blue': 'hsl(220, 13%, 13%)',
        'neutral-darkGrayish-blue': 'hsl(219, 9%, 45%)',
        'neutral-bright-blue': 'hsl(220, 14%, 75%)',
        'neutral-bright-red': 'hsl(223, 64%, 98%)',
        'gray-link' : 'hsl(228, 45%, 44%)'
      },
    },
  },
  plugins: [],
}
