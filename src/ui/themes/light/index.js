import { palette } from '../../lib/palette'
import { button } from './elements/button'
import { header } from './elements/header'
import { segment } from './elements/segment'
import { input } from './elements/input'

export const theme = {
  general: {
    fontFamily: 'Fira Sans',
    colors: {
      text: '#222',
      background: '#f1f3f5',
      borderLight: palette.backgrounds.Grey[300],
      border: palette.backgrounds.Grey[400],
      borderDark: palette.backgrounds.Grey[500]
    },
    shadows: {
      default: '0 5px 10px rgba(0, 0, 0, 0.1)',
      defaultToRight: '5px 0 10px rgba(0, 0, 0, 0.1)'
    }
  },
  elements: {
    header,
    button,
    input,
    segment
  }
}
