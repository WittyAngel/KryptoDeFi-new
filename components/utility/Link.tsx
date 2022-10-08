import type { ChakraProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import type { Simplify } from 'type-fest'

import NextLink from 'next/link'
import {
  Flex,
  Link as ChakraLink,
  LinkOverlay as ChakraLinkOverlay,
  LinkBox
} from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'

type LinkOverlayProps = Simplify<
  {
    href: string
    children: ReactNode
  } & ChakraProps
>

export function LinkOverlay({ href, children, ...props }: LinkOverlayProps) {
  return (
    <NextLink href={href} passHref>
      <ChakraLinkOverlay {...props}>{children}</ChakraLinkOverlay>
    </NextLink>
  )
}

type IconLinkProps = Simplify<
  {
    href: string
    icon: ReactNode
  } & ChakraProps
>

export function IconLink({ href, icon, ...props }: IconLinkProps) {
  return (
    <LinkBox>
      <LinkOverlay href={href}>
        <IconButton
          as={Flex}
          icon={icon}
          {...(props as any)}
          variant="icon"
          verticalAlign="middle"
          justify="center"
          align="center"
        />
      </LinkOverlay>
    </LinkBox>
  )
}

type LinkProps = Simplify<{ href: string; children: ReactNode } & ChakraProps>

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  )
}
