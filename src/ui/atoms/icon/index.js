// @flow
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const paths = {
  menu:
    'M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z'
}

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

type IconName = 'menu'

type Props = {
  name: IconName,
  size: number
}

export const Icon = ({ name, size, ...rest }: Props) => {
  const path = paths[name]

  if (!path) return null

  return (
    <IconBlock width={size} height={size} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="100%"
        height="100%"
      >
        <path d={path} />
      </svg>
    </IconBlock>
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(['menu']).isRequired,
  size: PropTypes.number
}

Icon.defaultProps = {
  size: 24
}
