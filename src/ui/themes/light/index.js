// @flow
import { createButtonColors } from '../../lib/palette'
import { type Theme } from '../../types'

const buttonDefaultShapes = ['500', '600', '700', '300']
const buttonDarkShapes = ['600', '700', '800', '400']

export const theme: Theme = {
  elements: {
    button: {
      neutral: createButtonColors('Blue', 'White', buttonDefaultShapes),
      success: createButtonColors('Green', 'White', buttonDefaultShapes),
      warning: createButtonColors('Orange', 'White', buttonDarkShapes),
      failure: createButtonColors('Red', 'White', buttonDefaultShapes)
    }
  }
}
