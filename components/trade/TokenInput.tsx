import type { FieldPath } from 'react-hook-form'
import type { TradeFormValues } from 'types'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Portal } from '@chakra-ui/portal'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton
} from '@chakra-ui/popover'
import { Button } from '@chakra-ui/button'

import { useEffect } from 'react'
import { TokenList } from 'components/trade'
import { getTokenMetaData } from 'components/api/moralis/base'

type TokenInputProps = {
  name: FieldPath<TradeFormValues>
  address?: FieldPath<TradeFormValues>
  decimal?: FieldPath<TradeFormValues>
}

export function TokenInput({ name, address }: TokenInputProps) {
  const { watch, setValue } = useFormContext<TradeFormValues>()
  const currentTicker = watch(name)
  const tickerAddress = watch(address)

  const { t } = useTranslation()

  useEffect(() => {
    ;(async () => {
      const formatedBalance = await getTokenMetaData(tickerAddress, 'bsc')
      if (formatedBalance) {
        setValue('decimal', parseInt(formatedBalance?.data?.[0]?.decimals, 10) || 18)
      }
    })()
  }, [tickerAddress])

  return (
    // NOTE: Popover must be lazily loaded in order
    // to make request on its opening
    <Popover strategy="absolute" placement="left" isLazy lazyBehavior="unmount" closeOnBlur={false}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button>{currentTicker}</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent width="auto">
              <PopoverCloseButton />
              <PopoverHeader>{t('TRADE_FORM_FROM_SELECT_TOKEN_HEADER')}</PopoverHeader>
              <PopoverBody>
                <TokenList
                  onSelect={(ticker, tokenAddress) => {
                    setValue(name, ticker)
                    if (address) {
                      setValue(address, tokenAddress)
                    }
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
