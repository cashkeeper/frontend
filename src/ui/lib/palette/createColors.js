import { palette } from './palette'

const DEFAULT_SHAPE = '500'

export const createColors = (bg, shape = DEFAULT_SHAPE) => ({
  background: palette.backgrounds[bg][shape],
  text: palette.texts[bg][shape]
})

export const createColorsAdvanced = ({ bg, text, shape = DEFAULT_SHAPE }) => ({
  background: palette.backgrounds[bg][shape],
  text: text || palette.texts[bg][shape]
})
