// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      'node_modules/@nujek/**/*.vue'
    ]
  },
  theme: {
    extend: {
      colors: {
        'jw-bg': '#EFF2F6'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ]
}
