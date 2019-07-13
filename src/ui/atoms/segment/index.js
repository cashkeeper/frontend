// @flow
import * as React from 'react'
import styled, { css } from 'styled-components'

const select = props => props.theme.elements.segment

const paddingShortcuts = {
  small: 8,
  normal: 16,
  big: 24
}

const getPaddingValue = padding => {
  const paddingX =
    padding in paddingShortcuts ? paddingShortcuts[padding] : Number(padding)
  const paddingY = Math.ceil(paddingX * 1.25)

  return `${paddingY}px ${paddingX}px`
}

const base = css`
  background-color: ${props => select(props).colors.background};
  padding: ${props => getPaddingValue(props.padding)};
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

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`

type Props = {
  type?: 'with-shadow' | 'with-border',
  padding?: number | 'small' | 'normal' | 'big',
  children: React.Node
}

export const Segment = ({ type, padding, children, ...rest }: Props) => {
  switch (type) {
    case 'with-border':
      return (
        <StyledSegmentWithBorder padding={padding} {...rest}>
          {children}
        </StyledSegmentWithBorder>
      )

    case 'with-shadow':
    default:
      return (
        <StyledSegmentWithShadow padding={padding} {...rest}>
          {children}
        </StyledSegmentWithShadow>
      )
  }
}

Segment.defaultProps = {
  type: 'with-shadow',
  padding: 'normal'
}
