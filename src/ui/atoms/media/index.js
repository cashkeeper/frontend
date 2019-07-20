// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import { useStore } from 'effector-react'
import { $breakpoint, type Breakpoint } from '../../lib/models/breakpoint'
import {
  breakpointList,
  breakpointPriorities as priorities
} from '../../constants'

const getIsVisible = ({
  from,
  to,
  on,
  breakpoint
}: {
  from: Breakpoint,
  to: Breakpoint,
  on?: Breakpoint | Breakpoint[],
  breakpoint: Breakpoint
}) => {
  if (on) {
    if (typeof on === 'string') return on === breakpoint
    else return on.includes(breakpoint)
  }

  if (priorities[from] > priorities[breakpoint]) return false
  if (priorities[to] < priorities[breakpoint]) return false

  return true
}

type Props = {
  from?: Breakpoint,
  to?: Breakpoint,
  on?: Breakpoint | Breakpoint[],
  children: React.Node
}

export const Media = ({ from = 'xs', to = 'xl', on, children }: Props) => {
  const breakpoint = useStore($breakpoint)

  const isVisible = getIsVisible({ from, to, on, breakpoint })

  if (!isVisible) return null

  return children
}

const breakpointType = PropTypes.oneOf(breakpointList)

Media.propTypes = {
  from: breakpointType,
  to: breakpointType,
  on: PropTypes.oneOfType([breakpointType, PropTypes.arrayOf(breakpointType)])
}
