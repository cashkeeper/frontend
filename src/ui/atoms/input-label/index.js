// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const sizeShortcuts = {
  small: 12,
  normal: 14,
  big: 16
}

const getSizeValue = size => {
  return size in sizeShortcuts ? sizeShortcuts[size] : size
}

const StyledInputLabel = styled.label`
  display: block;
  width: 100%;
  max-width: 160px;
  margin-bottom: 4px;
  opacity: 0.75;

  font-size: ${props => props.sizeValue}px;
  font-weight: 500;
`

type Props = {
  htmlFor?: string,
  size?: 'small' | 'normal' | 'big',
  children: React.Node
}

export const InputLabel = ({
  htmlFor,
  size = 'normal',
  children,
  ...rest
}: Props) => {
  const sizeValue = getSizeValue(size)

  return (
    <StyledInputLabel htmlFor={htmlFor} sizeValue={sizeValue}>
      {children}
    </StyledInputLabel>
  )
}

InputLabel.propTypes = {
  htmlFor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'big'])
}
