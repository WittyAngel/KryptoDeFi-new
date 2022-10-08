import type { ChakraProps } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@chakra-ui/button'
import { Flex, OrderedList, ListItem, Heading, Text, Stack, Box } from '@chakra-ui/layout'
import { useClipboard } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'

import { TierCards } from 'components/refer'

export default function ReferPage() {
  const { t } = useTranslation()

  return (
    <Stack direction="column" spacing={8}>
      <Flex
        h={{ lg: '400px', xl: '500px' }}
        bg="gray_alpha"
        mixBlendMode="difference"
        backdropFilter="blur(8px)"
        borderWidth="1px"
        borderStyle="solid"
        p={8}
        borderColor="primary"
        justify="space-between"
        align="center"
      >
        <Heading
          fontSize={{ lg: '3xl', xl: '4xl' }}
          w="fit-content"
          fontWeight="normal"
          fontFamily="Formation Sans, Lato"
        >
          {t('REFER_PAGE_CTA_TEXT')}
        </Heading>
        <Box h="100%" w={{ lg: '300px', xl: '400px' }}>
          <OrderedList h="100%" fontFamily="Lato">
            <ListItem h="100%" fontSize={{ lg: 'xl', xl: '2xl' }}>
              <Flex
                justify="space-between"
                h="100%"
                fontSize={{ lg: 'xl', xl: '3xl', '2xl': '3xl' }}
                direction="column"
              >
                <Box>
                  <Text>{t('REFER_PAGE_INSTRUCTIONS_STEP_1')}</Text>
                  <Text color="primary">{t('REFER_PAGE_INSTRUCTIONS_STEP_1_DESCRIPTION')}</Text>
                </Box>
                <RefCopyArea />
              </Flex>
            </ListItem>
          </OrderedList>
        </Box>
        <Box h="100%" w={{ lg: '300px', xl: '400px' }}>
          <OrderedList
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            h="100%"
            fontFamily="Lato"
          >
            <ListItem value="2" fontSize={{ lg: 'xl', xl: '2xl' }}>
              <Text>{t('REFER_PAGE_INSTRUCTIONS_STEP_2')}</Text>
              <Text color="primary">{t('REFER_PAGE_INSTRUCTIONS_STEP_2_DESCRIPTION')}</Text>
            </ListItem>
            <ListItem value="3" fontSize={{ lg: 'xl', xl: '2xl' }}>
              <Text>{t('REFER_PAGE_INSTRUCTIONS_STEP_3')}</Text>
              <Text color="primary">{t('REFER_PAGE_INSTRUCTIONS_STEP_3_DESCRIPTION')}</Text>
            </ListItem>
          </OrderedList>
        </Box>
      </Flex>
      <Box
        bg="gray_alpha"
        mixBlendMode="difference"
        backdropFilter="blur(8px)"
        borderWidth="1px"
        borderStyle="solid"
        p={8}
        borderColor="primary"
        justify="space-between"
      >
        <Heading
          fontSize={{ lg: '3xl', xl: '4xl' }}
          fontWeight="normal"
          fontFamily="Formation Sans"
        >
          {t('REFER_PAGE_REF_PROGRAM_HEADER')}
        </Heading>

        <Text mt={4} fontSize={{ lg: 'xl', xl: '2xl' }} fontFamily="Lato">
          {t('REFER_PAGE_REF_PROGRAM_DESCRIPTION')}
        </Text>
      </Box>
      <Box
        bg="gray_alpha"
        mixBlendMode="difference"
        backdropFilter="blur(8px)"
        borderWidth="1px"
        borderStyle="solid"
        p={8}
        borderColor="primary"
        justify="space-between"
      >
        <Heading
          fontSize={{ lg: '3xl', xl: '4xl' }}
          fontWeight="normal"
          fontFamily="Formation Sans"
        >
          {t('REFER_PAGE_EXPLAINATION_HEADER')}
        </Heading>

        <Text mt={4} fontSize={{ lg: 'xl', xl: '2xl' }} fontFamily="Lato">
          {t('REFER_PAGE_EXPLAINATION_DESCRIPTION')}
        </Text>
      </Box>
      <TierCards
        cards={[
          {
            heading: t('REFER_PAGE_TIERS_1_HEADING'),
            benefits: t('REFER_PAGE_TIERS_1_BENEFITS'),
            body: t('REFER_PAGE_TIERS_1_BODY')
          },
          {
            heading: t('REFER_PAGE_TIERS_2_HEADING'),
            benefits: t('REFER_PAGE_TIERS_2_BENEFITS'),
            body: t('REFER_PAGE_TIERS_2_BODY')
          },
          {
            heading: t('REFER_PAGE_TIERS_3_HEADING'),
            benefits: t('REFER_PAGE_TIERS_3_BENEFITS'),
            body: t('REFER_PAGE_TIERS_3_BODY')
          },
          {
            heading: t('REFER_PAGE_TIERS_4_HEADING'),
            benefits: t('REFER_PAGE_TIERS_4_BENEFITS'),
            body: t('REFER_PAGE_TIERS_4_BODY')
          }
        ]}
      />
      <Box
        bg="gray_alpha"
        mixBlendMode="difference"
        backdropFilter="blur(8px)"
        borderWidth="1px"
        borderStyle="solid"
        p={8}
        borderColor="primary"
        justify="space-between"
      >
        <Text fontFamily="Lato">{t('REFER_PAGE_FOOTER')}</Text>
      </Box>
    </Stack>
  )
}

function RefCopyArea() {
  const [reflink, setReflink] = useState<string>()
  const { t } = useTranslation()

  useEffect(() => {
    // TODO: fetch reflink
    setReflink('https://krypto.army?ref=test')
  }, [])

  const { hasCopied, onCopy } = useClipboard(reflink)

  return (
    <>
      <Input
        size="lg"
        isReadOnly
        placeholder={t('REFER_PAGE_REF_COPY_AREA_PLACEHOLDER')}
        value={reflink}
      />
      <Button variant="light" onClick={onCopy} py={12} fontSize="xl">
        {hasCopied
          ? t('REFER_PAGE_REF_COPY_AREA_BUTTON_TEXT_COPIED')
          : t('REFER_PAGE_REF_COPY_AREA_BUTTON_TEXT')}
      </Button>
    </>
  )
}
