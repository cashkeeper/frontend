import { button } from './elements/button'
import { header } from './elements/header'
import { segment } from './elements/segment'
import { palette } from '../../lib/palette'

export const theme = {
  general: {
    colors: {
      text: '#222',
      background: '#f1f3f5',
      border: palette.backgrounds.Grey[300]
    },
    shadows: {
      default: '0 5px 10px rgba(0, 0, 0, 0.1)',
      defaultToRight: '5px 0 10px rgba(0, 0, 0, 0.1)'
    }
  },
  elements: {
    header,
    button,
    segment
  }
}
