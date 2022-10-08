import type { TradeSettings } from 'types'
import { useState } from 'react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { Icon } from '@chakra-ui/icon'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton
} from '@chakra-ui/popover'
import { Portal } from '@chakra-ui/portal'
import { useTranslation } from 'react-i18next'

import { useDebouncedCallback } from 'use-debounce'

import { Address } from 'components/icons/general'
import { TokenList, TradeSettingsPopup } from 'components/trade'
import { getTokenBalance } from '../../services/getTokenBalance'

type TokenSelectProps = {
  onSelect: (ticker: string, address: string, tokenId: string) => void
  onSettingsChange: (settings: TradeSettings) => void
}

export function TokenSearch({ onSelect, onSettingsChange }: TokenSelectProps) {
  const [search, setSearch] = useState<string>()

  const handleSearchInput = useDebouncedCallback((value: string) => {
    setSearch(value)
  }, 500)

  const { t } = useTranslation()

  return (
    <Popover size="sm" autoFocus={false} isLazy>
      {({ onClose }) => (
        <>
          <Stack direction="row" align="center">
            <InputGroup>
              <PopoverTrigger>
                <Input
                  onChange={({ target: { value } }) => handleSearchInput(value)}
                  size="md"
                  placeholder={search && search.length !== 0 ? search : t('TRADE_FORM_SEARCH')}
                />
              </PopoverTrigger>
              <InputRightElement>
                <IconButton
                  variant="icon"
                  aria-label="Token address or name"
                  icon={<Icon as={Address} w={5} h={5} />}
                />
              </InputRightElement>
            </InputGroup>
            <TradeSettingsPopup onSettingsChange={onSettingsChange} />
          </Stack>
          <Portal>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody>
                <TokenList
                  onSelect={(ticker, address, tokenId) => {
                    setSearch(ticker)
                    if (onSelect) {
                      onSelect(ticker, address, tokenId)
                    }
                    getTokenBalance(localStorage.getItem('connectedAddress'), address)
                    onClose()
                  }}
                />
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  )
}
