/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'login-cyan':'#87F2F4',
        'boton-login':'#46A9C5',
        'fondo-login':"#D4EAE7",
        'boton-icons':"#CAF0F8",
        'azulIntegrador' : '#4B86D1',
        'azulIntegradorClaro' : '#CAF0F8',
      }
    },
  },
  plugins: [],
}
