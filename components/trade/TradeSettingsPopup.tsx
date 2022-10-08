import type { TradeSettings } from 'types'
import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton } from '@chakra-ui/popover'
import { Icon } from '@chakra-ui/icon'
import { Stack, Flex, Heading, Text } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Switch } from '@chakra-ui/switch'
import { IconButton } from '@chakra-ui/button'
import { Portal } from '@chakra-ui/portal'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

import { useDebouncedCallback } from 'use-debounce'
import { SettingEx } from 'components/icons/general'
import { useLocalStorage } from 'hooks'
import { initialTradeSettings } from 'utils'

type TradeSettingsPopupProps = {
  onSettingsChange: (settings: TradeSettings) => void
}

export function TradeSettingsPopup({ onSettingsChange }: TradeSettingsPopupProps) {
  return (
    <Popover isLazy closeOnBlur={false} placement="bottom-end">
      <PopoverTrigger>
        <IconButton
          variant="icon"
          aria-label="Trade settings"
          icon={<Icon as={SettingEx} w={7} h={7} />}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent width="460px" as={Flex} p={8} px={12} flexDir="column">
          <PopoverCloseButton mt={4} mr={4} size="lg" />
          <TradeSettingsPopupContent onSettingsChange={onSettingsChange} />
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

function TradeSettingsPopupContent({ onSettingsChange }: TradeSettingsPopupProps) {
  const [tradeSettings, setTradeSettings] = useLocalStorage<TradeSettings>(
    'tradeSettings',
    initialTradeSettings
  )
  const [currentTradeSettings, setCurrentTradeSettings] = useState<TradeSettings>(tradeSettings)

  const handleTxDeadlineInput = useDebouncedCallback((value: string) => {
    setCurrentTradeSettings({ ...currentTradeSettings, txDeadlineMins: +value })
  }, 600)

  const handleSettingSwitch = (value: any, state: boolean) => {
    setCurrentTradeSettings({ ...currentTradeSettings, [value]: state })
  }

  const { t } = useTranslation()

  useEffect(() => {
    return () => {
      setTradeSettings(currentTradeSettings)
      onSettingsChange(currentTradeSettings)
    }
  })

  return (
    <>
      <Heading fontFamily="Formation Sans" fontWeight="normal" size="lg">
        {t('TRADE_SETTINGS_POPUP_HEADER')}
      </Heading>
      <Text mt={16} fontSize="20px">
        {t('TRADE_SETTINGS_POPUP_TRANSACTION_SPEED_LABEL')}
      </Text>
      <Text lineHeight="1" color="primary">
        {t('TRADE_SETTINGS_POPUP_TRANSACTION_SPEED_DESCRIPTION')}
      </Text>
      <Stack mt={2} justify="space-between" direction="row">
        {['standard', 'fast', 'instant'].map((transactionSpeed) => (
          <Text
            key={transactionSpeed}
            fontSize="20px"
            _hover={{ cursor: 'pointer' }}
            {...(currentTradeSettings.transactionSpeed === transactionSpeed
              ? {
                  color: 'white',
                  borderBottomWidth: '1px',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'white'
                }
              : { color: 'primary' })}
            onClick={() => {
              setCurrentTradeSettings({
                ...currentTradeSettings,
                transactionSpeed: transactionSpeed as any
              })
            }}
          >
            {transactionSpeed}
          </Text>
        ))}
      </Stack>
      <Stack mt={8} direction="row" justify="space-between">
        <Text fontSize="20px">{t('TRADE_SETTINGS_POPUP_TX_DEADLINE_LABEL')}</Text>
        <Input
          onChange={({ target: { value } }) => handleTxDeadlineInput(value)}
          defaultValue={currentTradeSettings.txDeadlineMins}
          width="100px"
          type="number"
        />
      </Stack>

      <Stack direction="row" mt={8}>
        <Switch
          mt={2}
          defaultChecked={currentTradeSettings.expertMode}
          onChange={({ target: { checked } }) => {
            handleSettingSwitch('expertMode', checked)
          }}
        />
        <Flex ml={2} lineHeight="1" flexDir="column">
          <Text fontSize="20px">{t('TRADE_SETTINGS_POPUP_EXPERT_MODE_LABEL')}</Text>
          <Text color="primary">{t('TRADE_SETTINGS_POPUP_EXPERT_MODE_DESCRIPTION')}</Text>
        </Flex>
      </Stack>

      <Stack direction="row" mt={8}>
        <Switch
          mt={2}
          defaultChecked={currentTradeSettings.disableMultihops}
          onChange={({ target: { checked } }) => {
            handleSettingSwitch('disableMultihops', checked)
          }}
        />
        <Flex ml={2} lineHeight="1" flexDir="column">
          <Text fontSize="20px">{t('TRADE_SETTINGS_POPUP_DISABLE_MULTIHOPS_LABEL')}</Text>
          <Text color="primary">{t('TRADE_SETTINGS_POPUP_DISABLE_MULTIHOPS_DESCRIPTION')}</Text>
        </Flex>
      </Stack>

      <Stack direction="row" mt={8}>
        <Switch
          mt={2}
          defaultChecked={currentTradeSettings.sound}
          onChange={({ target: { checked } }) => {
            handleSettingSwitch('sound', checked)
          }}
        />
        <Flex ml={2} lineHeight="1" flexDir="column">
          <Text fontSize="20px">{t('TRADE_SETTINGS_POPUP_SOUND_LABEL')}</Text>
          <Text color="primary">{t('TRADE_SETTINGS_POPUP_SOUND_DESCRIPTION')}</Text>
        </Flex>
      </Stack>
    </>
  )
}
