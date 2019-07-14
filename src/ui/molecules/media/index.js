// @flow
import * as React from 'react'
import { useStore } from 'effector-react'
import { $breakpoint, type Breakpoint } from '../../lib/models/breakpoint'
import { breakpointPriorities as priorities } from '../../constants'

const getIsVisible = ({
  from,
  to,
  on,
  breakpoint
}: {
  from?: Breakpoint,
  to?: Breakpoint,
  on?: Breakpoint | Breakpoint[],
  breakpoint: Breakpoint
}) => {
  if (on) {
    if (typeof on === 'string') return on === breakpoint
    else return on.includes(breakpoint)
  }

  if (from && priorities[from] > priorities[breakpoint]) return false
  if (to && priorities[to] < priorities[breakpoint]) return false

  return true
}

type Props = {
  from?: Breakpoint,
  to?: Breakpoint,
  on?: Breakpoint | Breakpoint[],
  children: React.Node
}

export const Media = ({ from, to, on, children, ...rest }: Props) => {
  const breakpoint = useStore($breakpoint)

  const isVisible = getIsVisible({ from, to, on, breakpoint })

  if (!isVisible) return null

  return children
}

Media.defaultProps = {
  from: 'xs',
  to: 'xl'
}
