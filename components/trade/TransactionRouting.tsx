import { Stack, Flex, Text } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'

export function TransactionRouting() {
  const { t } = useTranslation()
  return (
    <Stack spacing={0}>
      {/* <Text textAlign="right">{t('TRADE_FORM_TRANSACTION_ROUTING')}</Text> */}
      {/* <Tracker /> */}
      {/* <Routing /> */}
    </Stack>
  )
}

function Tracker() {
  const { t } = useTranslation()

  // TODO: Get this from API. The useWatch hook from react-hook-form
  // can be very useful here for getting current form values
  // and triggering this component updates :)

  return (
    <Flex flexDir="row" justify="space-between">
      <Text>{t('TRADE_FORM_TRANSACTION_ROUTING_TRACKER')}</Text>
      {/* TODO: Get this from API */}
      <Text fontFamily="Lato">Pancake V2 LP</Text>
    </Flex>
  )
}

function Routing() {
  const { t } = useTranslation()

  // TODO: Get this from API. The useWatch hook from react-hook-form
  // can be very useful here for getting current form values
  // and triggering this component updates :)

  return (
    <Flex flexDir="row" justify="space-between">
      <Text>{t('TRADE_FORM_TRANSACTION_ROUTING_ROUTING')}</Text>
      {/* TODO: Get this from API */}
      <Text fontFamily="Lato">
        {['ETH', 'BNB', 'LUNA'].map((route, index, original) => {
          const isLastRoute = index === original.length - 1
          return (
            <Text as="span" key={route}>
              {route}
              {!isLastRoute && <Text as="span">{'->'}</Text>}
            </Text>
          )
        })}
      </Text>
    </Flex>
  )
}
