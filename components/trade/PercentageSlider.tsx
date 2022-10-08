import type { FieldPath } from 'react-hook-form'
import type { TradeFormValues } from 'types'
import { useFormContext } from 'react-hook-form'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/slider'

type PercentageSliderProps = {
  name: FieldPath<TradeFormValues>
  balance: number
}

export function PercentageSlider({ name, balance }: PercentageSliderProps) {
  const { setValue, trigger } = useFormContext<TradeFormValues>()

  const handleChangeEnd = async (value: number) => {
    setValue(name, Math.round((value / 100) * balance))
    await trigger(name)
  }

  return (
    <Slider
      w="var(--input-width)"
      colorScheme="green"
      min={0}
      max={100}
      onChangeEnd={handleChangeEnd}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  )
}
