// @flow
import { palette } from './palette'
import {
  type ColorName,
  type SpecialColorName,
  type ShapeName
} from '../../types'

const DEFAULT_SHAPE = '500'

export const createColors = (
  bg: ColorName,
  shape: ShapeName = DEFAULT_SHAPE
) => ({
  background: palette.backgrounds[bg][shape],
  text: palette.texts[bg][shape]
})

type Colors = {
  background: string,
  text: string
}

export const createColorsAdvanced = ({
  bg,
  text,
  shape = DEFAULT_SHAPE
}: {
  bg: ColorName,
  text: SpecialColorName,
  shape: ShapeName
}): Colors => ({
  background: palette.backgrounds[bg][shape],
  text: text || palette.texts[bg][shape]
})

type ButtonColors = {
  initial: Colors,
  hover: Colors,
  active: Colors,
  disabled: Colors
}

export const createButtonColors = (
  bg: ColorName,
  text: SpecialColorName,
  shapes: ShapeName[]
): ButtonColors => {
  const [initial, hover, active, disabled] = shapes

  return {
    initial: createColorsAdvanced({ bg, text, shape: initial }),
    hover: createColorsAdvanced({ bg, text, shape: hover }),
    active: createColorsAdvanced({ bg, text, shape: active }),
    disabled: createColorsAdvanced({ bg, text, shape: disabled })
  }
}
