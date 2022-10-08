const regularVariant = {
  borderColor: 'primary',
  borderWidth: '1px',
  bg: 'black',
  borderStyle: 'solid',
  _hover: {
    borderColor: 'white'
  }
}

export const Button = {
  sizes: {
    md: {
      h: 8,
      py: 2,
      px: 6
    }
  },
  variants: {
    regular: {
      ...regularVariant,
      textTransform: 'uppercase'
    },
    'regular-tight': {
      ...regularVariant,
      px: 2
    },
    'regular-cta': {
      ...regularVariant,
      borderRadius: 'none',
      textTransform: 'uppercase',
      color: 'positive',
      borderColor: 'positive',
      _hover: {
        bg: 'blackAlpha.100',
        borderColor: 'positive'
      }
    },
    light: {
      borderRadius: 'none',
      fontFamily: 'Lato',
      bg: 'light_accent'
    },
    icon: {
      _hover: {
        transform: 'scale(1.2)'
      },
      _active: {
        transform: 'scale(0.9)'
      },
      _disabled: {
        _hover: {
          transform: 'none'
        },
        _active: {
          transform: 'none'
        }
      }
    }
  },
  defaultProps: {
    variant: 'regular',
    size: 'md'
  }
}
