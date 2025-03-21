/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      nero: '#001219',
      blu: '#005F73',
      azzurro: '#0A9396',
      verdeAcqua: '#94D2BD',
      sabbia: '#E9D8A6',
      giallo: '#EE9B00',
      arrancioChiaro: '#CA6702',
      arrancioScuro: '#BB3E03',
      rosso: '#AE2012',
      bordoo:  '#9B2226',
      grigio: '#455A64',
      verde: '#2F855A',
      verdeScuro: '#004b23',
      bianco: '#f8f8f8'
        },
        screens: {
        'xs': '480px',     
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',        
        '3xl': '1920px',
      },  
  },
  },
  plugins: []
}

