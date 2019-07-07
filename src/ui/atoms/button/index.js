// @flow
import * as React from 'react'
import styled from 'styled-components'
import {
  type Theme,
  type ButtonColorVariant,
  type ButtonState,
  type ButtonColors
} from '../../types'

const colorToPalette = (
  color: ButtonColorVariant,
  state: ButtonState,
  theme: Theme
): ButtonColors => {
  return theme.elements.button[color][state]
}

const StyledButton = styled.button(
  ({ color, theme }: { color: ButtonColorVariant, theme: Theme }) => {
    const initialColors = colorToPalette(color, 'initial', theme)
    const hoverColors = colorToPalette(color, 'hover', theme)
    const activeColors = colorToPalette(color, 'active', theme)
    const disabledColors = colorToPalette(color, 'disabled', theme)

    return {
      fontSize: 14,
      padding: '8px 20px',
      marginRight: '0.5em',
      border: 'none',
      borderRadius: 5,
      backgroundColor: initialColors.background,
      color: initialColors.text,
      outline: 'none',
      cursor: 'pointer',

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
      }
    }
  }
)

type Props = {
  color?: ButtonColorVariant,
  disabled?: boolean,
  children?: React.Node
}

export const Button = ({
  color = 'neutral',
  disabled = false,
  children,
  ...rest
}: Props) => {
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
