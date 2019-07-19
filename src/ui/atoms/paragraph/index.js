// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  size: number,
  children: React.Node
}

export const Paragraph = ({ size, children, ...rest }: Props) => (
  <StyledParagraph size={size} {...rest}>
    {children}
  </StyledParagraph>
)

Paragraph.propTypes = {
  size: PropTypes.number.isRequired
}

Paragraph.defaultProps = {
  size: 14
}
