export const Modal = {
  variants: {
    regular: {
      overlay: {
        backdropFilter: 'blur(8px)'
      },
      dialog: {
        bg: 'dark_accent',
        border: '1px solid',
        borderColor: 'primary'
      }
    },
    glassy: {
      overlay: {
        bg: 'gradient',
        backdropFilter: 'blur(20px)'
      },
      dialog: {
        bg: 'gradient',
        backdropFilter: 'blur(40px)',
        boxShadow: 'none',
        borderRadius: 'none'
      }
    }
  },
  defaultProps: {
    variant: 'regular'
  }
}
