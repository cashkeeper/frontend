// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { type Properties as CSS } from 'csstype'

const StyledParagraph = styled.p`
  font-size: ${props => props.size}px;
  margin: 1em 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

type Props = {
  size?: number,
  style?: CSS<string | number>,
  children: React.Node
}

export const Paragraph = ({ size = 14, children, ...rest }: Props) => (
  <StyledParagraph size={size} {...rest}>
    {children}
  </StyledParagraph>
)

Paragraph.propTypes = {
  size: PropTypes.number
}
