module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
         primary: '#AE508E',
         secondary: '#FFC8CB',
         tertiary: '#E6176F',
         txtColor: '#4A0056',
      },
      fontFamily: {
        'genty': ['Genty'],
        'dosis': ['Dosis'],
      },
      backgroundImage: {
        'hero': "url('../src/assets/images/bg-hero.svg')",
        'meditar': "url('../src/assets/images/bg-meditar.svg')",
        'quemSou': "url('../src/assets/images/bg-quemSou.png')",
        'paisagem': "url('../src/assets/images/bg-guia.png')",
        'meditando': "url('../src/assets/images/bg-meditando.png')",
        'ondas': "url('../src/assets/images/img-ondas.png')",
        'ondas2': "url('../src/assets/images/img-ondas2.png')",
        'testimonial': "url('../src/assets/images/bg-testimonial.png')"
      },
      height: {
        '108': '30rem',
        '576px': '72rem' 
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tw-elements/dist/plugin')
  ],
}
