import { Box, Heading, Flex, Stack, Text } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { BuyCryptoForm } from 'components/buy'

export default function BuyPage() {
  const { t } = useTranslation()

  return (
    <Stack spacing={8}>
      <Flex
        height="200px"
        justify="center"
        align="center"
        bg="gray_alpha"
        mixBlendMode="difference"
        backdropFilter="blur(8px)"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="primary"
      >
        <Heading fontSize="5xl" fontFamily="Lato" fontStyle="italic" fontWeight="bold">
          {t('BUY_PAGE_HEADER')}
        </Heading>
      </Flex>
      <Stack spacing={8} direction="row">
        <Flex
          w="100%"
          bg="gray_alpha"
          flexDir="column"
          mixBlendMode="difference"
          backdropFilter="blur(8px)"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="primary"
        >
          <Heading
            p={4}
            w="100%"
            as={Flex}
            justify="center"
            fontSize="44px"
            fontWeight="normal"
            fontFamily="Formation Sans, Lato"
          >
            {t('BUY_PAGE_NOTE_HEADING')}
          </Heading>
          <Text mt={8} ml="200px" mr="100px" fontSize="2xl" lineHeight="1">
            {t('BUY_PAGE_NOTE_START_JOURNEY')}
          </Text>
          <Text color="primary" ml="300px" mr="100px" my={8} fontSize="xl" lineHeight="1">
            {t('BUY_PAGE_NOTE_INTRODUCTION')}
          </Text>
          <Text ml="200px" mr="100px" fontSize="2xl" lineHeight="1">
            {t('BUY_PAGE_NOTE_ASSURANCE')}
          </Text>
        </Flex>
        <Flex
          w={{ base: '700px', '2xl': '800px' }}
          p={8}
          bg="gray_alpha"
          flexDir="column"
          mixBlendMode="difference"
          backdropFilter="blur(8px)"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="primary"
        >
          <Text mt={2} fontSize="26px" fontFamily="Lato" lineHeight="1" color="primary">
            {t('BUY_PAGE_CHOOSE_CRYPTO')}
          </Text>
          <Box px={12} mt={8}>
            <BuyCryptoForm />
          </Box>
        </Flex>
      </Stack>
    </Stack>
  )
}
