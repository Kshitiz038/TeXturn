/** @type {import('tailwindcss').Config} */
export default {
  content: ['./jsx'],
  theme: {
    extend: {
      fontFamily: {
        boli: ['"MV Boli"', 'cursive'], // Add MV Boli with a fallback
        pressstart2p: ['"Press Start 2P"', 'sans-serif']
        

      },
      borderRadius: {
        'full' : '9999px'
      },
      backgroundImage: {
        'custom-image': "url('/Screenshot 2024-12-26 091725.png')",
      } 
    },
  },
  plugins: [],
}

