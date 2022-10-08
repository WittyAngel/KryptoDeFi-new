export const Link = {
  baseStyle: {},
  variants: {
    regular: {
      color: 'primary',
      borderBottomWidth: '1px',
      borderBottomColor: 'primary',
      borderBottomStyle: 'solid',
      _active: {
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: '2px'
      },
      _hover: {
        textDecoration: 'none'
      }
    }
  },
  defaultProps: {
    variant: 'regular'
  }
}
