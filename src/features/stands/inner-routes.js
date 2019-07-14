// @flow
import { buttonsStandRoutes } from './features/buttons'
import { headersStandRoutes } from './features/headers'
import { segmentsStandRoutes } from './features/segments'
import { paragraphsStandRoutes } from './features/paragraphs'
import { gridStandRoutes } from './features/grid'
import { mediaStandRoutes } from './features/media'

export const innerRoutes = [
  ...buttonsStandRoutes,
  ...headersStandRoutes,
  ...segmentsStandRoutes,
  ...paragraphsStandRoutes,
  ...gridStandRoutes,
  ...mediaStandRoutes
]
