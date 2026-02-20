import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
<<<<<<< HEAD
      base: "/Finovo"
=======
      base: "/Finovo/"
>>>>>>> 866f5107eb376e717b0b1a102247d4433075c15d
    }),
    tailwindcss(),
    flowbiteReact()
  ],
})
