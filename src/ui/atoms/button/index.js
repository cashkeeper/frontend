// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStore } from 'effector-react'
import { $isMobile } from '../../lib/models'

const colorToPalette = (color, state, theme) => {
  return theme.elements.button[color][state]
}

const StyledButton = styled.button(({ color, isMobile, theme }) => {
  const initialColors = colorToPalette(color, 'initial', theme)
  const hoverColors = colorToPalette(color, 'hover', theme)
  const activeColors = colorToPalette(color, 'active', theme)
  const disabledColors = colorToPalette(color, 'disabled', theme)

  const marginBottom = isMobile ? '0.5em' : 0

  return {
    fontSize: 14,
    padding: '9px 20px 7px',
    marginRight: '0.5em',
    marginBottom,
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
    }
  }
})

type Props = {
  type?: 'button' | 'submit' | 'reset',
  color?: 'neutral' | 'success' | 'warning' | 'failure',
  disabled?: boolean,
  onClick?: (event: Event) => void,
  children: React.Node
}

export const Button = ({ type, color, disabled, children, ...rest }: Props) => {
  const isMobile = useStore($isMobile)

  if (disabled)
    return (
      <StyledButton
        type={type}
        color={color}
        isMobile={isMobile}
        disabled={true}
        {...rest}
      >
        {children}
      </StyledButton>
    )

  return (
    <StyledButton type={type} color={color} isMobile={isMobile} {...rest}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  color: PropTypes.oneOf(['neutral', 'success', 'warning', 'failure'])
    .isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'button',
  color: 'neutral',
  disabled: false
}
