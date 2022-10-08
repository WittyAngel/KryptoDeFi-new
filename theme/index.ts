import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// NOTE: These must be relative imports
// beacuse Chakra-UI CLI for generating
// typings does not work if  { "baseUrl": "." }
// is set in tsconfig.json
import { config } from './config'
import { styles } from './styles'
import { colors } from './colors'

import { Button, Modal, Input, Menu, Link, Tooltip, Popover, Switch, ListItem } from './components'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1400px',
  '2xl': '1600px',
  '3xl': '1860px'
})

const overrides = {
  components: {
    Button,
    Modal,
    Input,
    Menu,
    Link,
    Tooltip,
    Popover,
    Switch,
    ListItem
  },
  breakpoints,
  styles,
  config,
  colors
}

export const theme = extendTheme(overrides)
