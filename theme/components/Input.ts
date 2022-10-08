export const Input = {
  baseStyle: {
    field: {
      p: 2,
      bg: 'black',
      borderColor: 'primary',
      borderWidth: '1px',
      borderStyle: 'solid',
      _placeholder: {
        color: 'secondary'
      },
      _hover: {
        borderColor: 'white'
      },
      _focus: {
        borderColor: 'white'
      }
    }
  },
  variants: {
    regular: {},
    trade: {
      field: {
        fontFamily: 'Lato'
      }
    }
  },
  defaultProps: {
    variant: 'regular'
  }
}
