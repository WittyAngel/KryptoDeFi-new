import type { Control, FieldPath } from 'react-hook-form'
import type { TradeFormValues } from 'types'
import { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/layout'
import { useWatch } from 'react-hook-form'
import { getQuoteZrx } from 'components/api/zrx'

type TokenInputDollarValueProps = {
  control: Control
  addressField: FieldPath<TradeFormValues>
  tokenField: FieldPath<TradeFormValues>
}

export function TokenInputDollarValue({
  control,
  addressField,
  tokenField
}: TokenInputDollarValueProps) {
  const tokenAddress = useWatch({ control, name: addressField })
  const token = useWatch({ control, name: tokenField })

  // TODO: Retrieve dollar representation of input token
  const [price, setPrice] = useState('0.00');
  useEffect(() => {
    const fetchPrice = async () => {
      if (token === 'USDT') {
        setPrice('1.00')
      } else {
        const quote = await getQuoteZrx(
          tokenAddress,
          '0x55d398326f99059ff775485246999027b3197955', // USDT address
          Math.floor(Number(1 * 10 ** 18))
        )
    
        setPrice((+quote.price).toFixed(2))
      }
    };
    fetchPrice();
  }, [token]);

  // NOTE: This is dummy value
  return <Text as="sup" w="100%" pr="5px" textAlign="right">~{price}$</Text>
}
