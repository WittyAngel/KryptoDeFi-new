import { Text, Heading, Flex, Stack, Box } from '@chakra-ui/layout'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/accordion'
import { useTranslation } from 'react-i18next'

type TierCardProps = {
  heading: string
  body: string
  benefits: string
}

type TierCardsProps = {
  cards: Array<TierCardProps>
}

export function TierCards({ cards }: TierCardsProps) {
  return (
    <Accordion
      reduceMotion
      allowToggle
      as={Stack}
      spacing={8}
      direction="row"
      justifyContent="space-between"
    >
      {cards.map((tierCardProps) => (
        <TierCard key={tierCardProps.heading} {...tierCardProps} />
      ))}
    </Accordion>
  )
}

function TierCard({ heading, benefits, body }: TierCardProps) {
  const { t } = useTranslation()

  return (
    <AccordionItem
      bg="gray_alpha"
      mixBlendMode="difference"
      backdropFilter="blur(8px)"
      borderWidth="1px"
      minWidth="300px"
      borderStyle="solid"
      borderColor="primary"
      h="fit-content"
    >
      <Box>
        <Heading px={4} fontWeight="normal" fontSize="5xl" fontFamily="Formation Sans, Lato">
          {heading}
        </Heading>
        <Text px={4} py={2} fontFamily="Lato">
          {benefits}
        </Text>
      </Box>
      <Flex w="100%" justifyContent="flex-end">
        <AccordionButton>{t('TIER_CARD_READ_MORE')}</AccordionButton>
      </Flex>
      <AccordionPanel>
        <Text fontFamily="Lato" fontSize="xl">
          {body}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  )
}
