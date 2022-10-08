import type { NavigationItem } from 'types'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { Stack, Box } from '@chakra-ui/layout'
import { useRouter } from 'next/router'

const LanguageSelect = dynamic(() => import('components').then((module) => module.LanguageSelect), {
  ssr: false
})

type NavigationProps = {
  items: Array<NavigationItem>
}

export function Navigation({ items }: NavigationProps) {
  const router = useRouter()
  return (
    <Stack
      pos="fixed"
      sx={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      w="var(--vertical-navigation-width)"
      h="100%"
      as="nav"
      justify="center"
      align="center"
      spacing={8}
      direction="row"
    >
      <Box sx={{ writingMode: 'horizontal-tb' }}>
        <LanguageSelect />
      </Box>
      {items.map(({ label, destination }) => {
        return (
          <NextLink key={label} href={destination} passHref>
            <Box
              p={0}
              as="a"
              w="fit-content"
              color="primary"
              textTransform="uppercase"
              borderLeftColor="primary"
              borderLeftStyle="solid"
              borderLeftWidth="2px"
              {...(router.pathname.startsWith(destination) &&
                router.pathname === destination && {
                  color: 'white',
                  borderLeftColor: 'white'
                })}
            >
              {label}
            </Box>
          </NextLink>
        )
      })}
    </Stack>
  )
}
