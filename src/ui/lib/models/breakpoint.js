// @flow
import { type Store } from 'effector'
import { breakpoints } from '@ui/constants'
import { $viewport } from './viewport'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const $breakpoint: Store<Breakpoint> = $viewport.map(viewport => {
  const { width } = viewport

  if (width >= breakpoints.xl) return 'xl'
  if (width >= breakpoints.lg) return 'lg'
  if (width >= breakpoints.md) return 'md'
  if (width >= breakpoints.sm) return 'sm'
  return 'xs'
})

export { $breakpoint }
export type { Breakpoint }
