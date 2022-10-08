import type { NavigationItem } from 'types'
import NextLink from 'next/link'
import { Icon } from '@chakra-ui/icon'
import { Stack, Box, Flex } from '@chakra-ui/layout'
import { useRouter } from 'next/router'

import { IconLink } from 'components/utility'
import { Facebook, LinkedIn, Telegram, Twitter } from 'components/icons/social'
import { Instagram } from './icons/social/Instagram'

type RightToolbarProps = {
  bottomItems: Array<NavigationItem>
}

export function RightToolbar({ bottomItems }: RightToolbarProps) {
  const router = useRouter()
  return (
    <Stack
      pos="fixed"
      sx={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      w="var(--vertical-navigation-width)"
      h="100%"
      justify="space-around"
      spacing={8}
      right={8}
      direction="row"
    >
      <Flex
        flexDirection="column"
        spacing={8}
        h="100px"
        mb="200px"
        justify="center"
        align="space-between"
        flexWrap="wrap"
      >
        <IconLink icon={<Icon as={Twitter} w={8} h={8} />} href="/twitter" />
        <IconLink mt={4} icon={<Icon as={Telegram} w={12} h={12} />} href="/telegram" />
        <IconLink mt={4} icon={<Icon as={LinkedIn} w={8} h={8} />} href="/linkedin" />
        <IconLink mt={4} icon={<Icon as={Facebook} w={8} h={8} />} href="/facebook" />
        <IconLink mt={4} icon={<Icon as={Instagram} w={8} h={8} />} href="/instagram" />
      </Flex>
      <Flex flexDirection="column" flexWrap="wrap">
        {bottomItems.map(({ label, destination }) => {
          return (
            <NextLink key={label} href={destination} passHref>
              <Box
                mb={8}
                p={0}
                as="a"
                w="fit-content"
                color="primary"
                textTransform="uppercase"
                borderRightColor="primary"
                borderRightStyle="solid"
                borderRightWidth="2px"
                {...(router.pathname.startsWith(destination) &&
                  router.pathname === destination && {
                    color: 'white',
                    borderRightColor: 'white'
                  })}
              >
                {label}
              </Box>
            </NextLink>
          )
        })}
      </Flex>
    </Stack>
  )
}
