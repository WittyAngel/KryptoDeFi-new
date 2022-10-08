import type { Simplify } from 'type-fest'
import type { ChakraProps } from '@chakra-ui/react'
import type { TradeFormValues } from 'types'
import { FieldPath, Control, useFormContext, useWatch } from 'react-hook-form'
import { Box } from '@chakra-ui/layout'

import { useEffect, useState } from 'react'
import {
  getNativeTokenBalance,
  getOtherTokenBalance,
  getTokenMetaData
} from 'components/api/moralis/base'
import { appConfig } from 'components/appConfig'

type TickerBalanceProps = Simplify<
  {
    tickerField: FieldPath<TradeFormValues>
    tickerData: any
    tickerDecimal: any
    control: Control
    onBalanceChange: (balance: any) => void
  } & ChakraProps
>

export function TickerBalance({
  tickerField,
  tickerData,
  tickerDecimal,
  control,
  onBalanceChange,
  ...props
}: TickerBalanceProps) {
  const [balance, setBalance] = useState<any>()
  const ticker = useWatch({ name: tickerField, control })
  const tokenDecimal = useWatch({ name: tickerDecimal, control })

  const addressDetails: any = appConfig.walletAddress;

  const calculateBalance = async (ticker: any) => {
    const addressDetails: any = appConfig.walletAddress
    let balance = 0

    if (!addressDetails || addressDetails === 'undefined') {
      // history.push('/wallet/metamask/dex');
      return 0
    }
    try {
      if (ticker.toLowerCase() === 'bnb' || ticker.toLowerCase() === 'eth') {
        const res = await getNativeTokenBalance(addressDetails, 'bsc')
        balance = parseInt(res?.data.balance, 10) || 0
      } else {
        const res: any = await getOtherTokenBalance(addressDetails, 'bsc')
        if (res.data.length) {
          balance =
            parseInt(
              res.data.find((e: any) => e.symbol.toLowerCase() === ticker.toLowerCase())?.balance,
              10
            ) || 0
        }
      }
    } catch (err: any) {
      console.log(err)
    }
    return balance
  }

  useEffect(() => {
    ;(async () => {
      const balanceData = await calculateBalance(ticker)
      const formatedBalance = (balanceData / 10 ** tokenDecimal).toFixed(4)
      if (balanceData) {
        setBalance(formatedBalance)
        onBalanceChange(formatedBalance)
      }
    })()
  }, [ticker])

  return <>{addressDetails ? <Box {...props}>{balance}</Box> : ''}</>
   
}
