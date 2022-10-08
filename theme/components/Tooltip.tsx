export const Tooltip = {
  variants: {
    glass: {
      position: 'absolute',
      fontFamily: 'Lato',
      fontWeight: 'medium',
      color: 'white',
      bg: 'gradient',
      backdropFilter: 'blur(12px)',
      zIndex: 'tooltip'
    }
  },
  defaultProps: {
    variant: 'glass'
  }
}
