import type { NavigationItem } from 'types'
import { Box, Divider, Stack } from '@chakra-ui/layout'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

type SiteFooterProps = {
  items: Array<NavigationItem>
}

export function SiteFooter({ items }: SiteFooterProps) {
  const router = useRouter()
  return (
    <Box pb={8}>
      <Divider />
      <Stack direction="row" spacing={8}>
        {items.map(({ label, destination }) => (
          <NextLink key={label} href={destination} passHref>
            <Box
              p={0}
              as="a"
              w="fit-content"
              color="primary"
              textTransform="uppercase"
              {...(router.pathname.startsWith(destination) &&
                router.pathname === destination && {
                  color: 'white'
                })}
            >
              {label}
            </Box>
          </NextLink>
        ))}
      </Stack>
    </Box>
  )
}
