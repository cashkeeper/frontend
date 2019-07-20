// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const select = props => props.theme.elements.segment

const paddingShortcuts = {
  small: [8, 12],
  normal: [20, 24],
  big: [28, 32]
}

const getPaddingValue = (padding, paddingX, paddingY) => {
  const [x, y] = paddingShortcuts[padding || 'normal']

  let leftX = x,
    rightX = x,
    topY = y,
    bottomY = y

  if (paddingX)
    if (typeof paddingX === 'number') [leftX, rightX] = [paddingX, paddingX]
    else [leftX, rightX] = paddingX

  if (paddingY)
    if (typeof paddingY === 'number') [topY, bottomY] = [paddingY, paddingY]
    else [topY, bottomY] = paddingY

  return `${topY}px ${rightX}px ${bottomY}px ${leftX}px`
}

const base = css`
  background-color: ${props => select(props).colors.background};
  padding: ${props => props.padding};
  margin: 24px 0 16px;

  border-radius: 2px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const StyledSegmentWithBorder = styled.div`
  ${base}

  border: 1px solid ${props => select(props).colors.border};
`

const StyledSegmentWithShadow = styled.div`
  ${base}

  box-shadow: ${props => props.theme.general.shadows.default};
`

type Props = {
  type?: 'with-shadow' | 'with-border',
  padding?: 'small' | 'normal' | 'big',
  paddingX?: number | number[],
  paddingY?: number | number[],
  children: React.Node
}

export const Segment = ({
  type = 'with-shadow',
  padding = 'normal',
  paddingX,
  paddingY,
  children,
  ...rest
}: Props) => {
  const paddingValue = getPaddingValue(padding, paddingX, paddingY)

  switch (type) {
    case 'with-border':
      return (
        <StyledSegmentWithBorder padding={paddingValue} {...rest}>
          {children}
        </StyledSegmentWithBorder>
      )

    case 'with-shadow':
    default:
      return (
        <StyledSegmentWithShadow padding={paddingValue} {...rest}>
          {children}
        </StyledSegmentWithShadow>
      )
  }
}

const axisPaddingType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.number)
])

Segment.propTypes = {
  type: PropTypes.oneOf(['with-shadow', 'with-border']),
  padding: PropTypes.oneOf(['small', 'normal', 'big']),
  paddingX: axisPaddingType,
  paddingY: axisPaddingType
}
