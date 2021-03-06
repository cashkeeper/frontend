import { createColorsAdvanced } from '../../../lib/palette'

const SHAPE = 500

const createButtonColors = (bg, text) => ({
  initial: createColorsAdvanced({ bg, text, shape: SHAPE }),
  hover: createColorsAdvanced({ bg, text, shape: SHAPE + 100 }),
  active: createColorsAdvanced({ bg, text, shape: SHAPE + 200 })
})

export const button = {
  neutral: createButtonColors('Blue', 'White'),
  success: createButtonColors('Green', 'White'),
  warning: createButtonColors('Orange', 'White'),
  failure: createButtonColors('Red', 'White')
}
