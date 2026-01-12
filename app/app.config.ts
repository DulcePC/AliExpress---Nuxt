export default defineAppConfig({
  css: ['~/assets/css/main.css'],
  ui: {
    button: {
      slots: {
        base:[ 'rounded-none cursor-pointer text-center font-bold' ]
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
    },
    card: {
      slots: {
        root: 'rounded-none p-2 border-none !ring-0 box-shadow-none bg-white',
        header: '!p-0 px-0 !-mx-2 !-mt-2 relative',
        body: '!p-0 px-0 !pt-2',
      },
    },
    badge: {
      slots: {
        base: 'font-bold'
      }
    }
  }
})