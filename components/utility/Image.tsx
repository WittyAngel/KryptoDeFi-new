import NextImage from 'next/image'

import { chakra } from '@chakra-ui/react'

const ChakraNextImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

export function Image(props: any) {
  return <ChakraNextImage {...props} />
}
