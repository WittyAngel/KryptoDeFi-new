export const Popover = {
  variants: {
    glassy: {
      content: {
        bg: 'gradient',
        backdropFilter: 'blur(20px)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'primary'
      },
      arrow: {
        bg: 'gradient',
        backdropFilter: 'blur(40px)'
      }
    }
  },
  defaultProps: {
    variant: 'glassy'
  }
}
