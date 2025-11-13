import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        bitter: ['"Bitter"', 'serif'],
      },
    },
  },
  plugins: [  
     tailwindcss(),
    ],
})





