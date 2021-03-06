// @flow
import { buttonsStandRoutes } from './features/buttons'
import { inputStandRoutes } from './features/inputs'
import { headersStandRoutes } from './features/headers'
import { segmentsStandRoutes } from './features/segments'
import { paragraphsStandRoutes } from './features/paragraphs'
import { gridStandRoutes } from './features/grid'
import { mediaStandRoutes } from './features/media'
import { textAreasStandRoutes } from './features/text-areas'

export const innerRoutes = [
  ...buttonsStandRoutes,
  ...inputStandRoutes,
  ...textAreasStandRoutes,
  ...headersStandRoutes,
  ...segmentsStandRoutes,
  ...paragraphsStandRoutes,
  ...gridStandRoutes,
  ...mediaStandRoutes
]
