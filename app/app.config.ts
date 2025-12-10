export default defineAppConfig({
  css: ['~/assets/css/main.css'],
  ui: {
    button: {
      slots: {
        base:[ 'rounded-none cursor-pointer']
      }
    },
    input: {
      slots: {
        base: ['rounded-none font-semibold placeholder:font-normal' ]
      },
      variants: {
        variant: {
          outline: 'ring ring-inset ring-accented ring-accent-500',
        }
      }
    }
  }
})