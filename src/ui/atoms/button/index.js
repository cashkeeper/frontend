// @flow
import * as React from 'react'
import styled from 'styled-components'

const colorToPalette = (color, state, theme) => {
  return theme.elements.button[color][state]
}

const StyledButton = styled.button(({ color, theme }) => {
  const initialColors = colorToPalette(color, 'initial', theme)
  const hoverColors = colorToPalette(color, 'hover', theme)
  const activeColors = colorToPalette(color, 'active', theme)
  const disabledColors = colorToPalette(color, 'disabled', theme)

  return {
    fontSize: 14,
    padding: '9px 20px 7px',
    marginRight: '0.5em',
    border: 'none',
    borderRadius: 5,
    backgroundColor: initialColors.background,
    color: initialColors.text,
    outline: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.1s ease',

    ':hover': {
      backgroundColor: hoverColors.background,
      color: hoverColors.text
    },

    ':active': {
      backgroundColor: activeColors.background,
      color: activeColors.text
    },

    ':disabled': {
      backgroundColor: disabledColors.background,
      color: disabledColors.text,
      cursor: 'default'
    },

    ':last-child': {
      marginRight: 0
    },

    '@media only screen and (max-width: 768px)': {
      marginBottom: '0.5em'
    }
  }
})

type Props = {
  color?: 'neutral' | 'success' | 'warning' | 'failure',
  disabled?: boolean,
  onClick?: (event: Event) => void,
  children: React.Node
}

export const Button = ({ color, disabled, children, ...rest }: Props) => {
  if (disabled)
    return (
      <StyledButton color={color} disabled={true}>
        {children}
      </StyledButton>
    )

  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'neutral',
  disabled: false
}
