// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const sizeShortcuts = {
  tiny: 14,
  small: 18,
  normal: 24,
  big: 32
}

const getSizeValue = size => {
  return size in sizeShortcuts ? sizeShortcuts[size] : size
}

const base = css`
  font-size: ${props => getSizeValue(props.size)}px;
  margin: 24px 0 16px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const StyledSubHeader = styled.h3`
  ${base}

  color: ${props => props.theme.elements.header.sub.color};
  font-weight: 500;
`

const StyledHeader = styled.h2`
  ${base}

  font-weight: 700;

  & + ${StyledSubHeader} {
    margin-top: -12px;
  }
`

type Props = {
  size?: number | 'tiny' | 'small' | 'normal' | 'big',
  sub?: boolean,
  children: React.Node
}

export const Header = ({ size, sub, children, ...rest }: Props) => {
  if (sub)
    return (
      <StyledSubHeader size={size} {...rest}>
        {children}
      </StyledSubHeader>
    )

  return (
    <StyledHeader size={size} {...rest}>
      {children}
    </StyledHeader>
  )
}

Header.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['tiny', 'small', 'normal', 'big'])
  ]).isRequired,
  sub: PropTypes.bool.isRequired
}

Header.defaultProps = {
  size: 'normal',
  sub: false
}
