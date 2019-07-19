// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStore } from 'effector-react'
import { $isMobile } from '../../lib/models'

const colorToPalette = (color, state, theme) => {
  return theme.elements.button[color][state]
}

const sizeToValues = {
  small: {
    font: '12px',
    padding: '8px 14px 6px'
  },
  normal: {
    font: '14px',
    padding: '9px 20px 7px'
  },
  big: {
    font: '16px',
    padding: '10px 26px 8px'
  }
}

const StyledButton = styled.button(({ size, color, isMobile, wide, theme }) => {
  const initialColors = colorToPalette(color, 'initial', theme)
  const hoverColors = colorToPalette(color, 'hover', theme)
  const activeColors = colorToPalette(color, 'active', theme)
  const disabledColors = colorToPalette(color, 'disabled', theme)

  const sizeValues = sizeToValues[size]

  const marginBottom = isMobile ? '0.5em' : 0
  const width = wide ? '100%' : 'auto'

  return {
    width,
    fontSize: sizeValues.font,
    padding: sizeValues.padding,
    marginRight: '0.5em',
    marginBottom,
    border: 'none',
    borderRadius: 5,
    backgroundColor: initialColors.background,
    color: initialColors.text,
    outline: 'none',
    '-webkit-tap-highlight-color': 'transparent',
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
  type: 'button' | 'submit' | 'reset',
  size: 'small' | 'normal' | 'big',
  color: 'neutral' | 'success' | 'warning' | 'failure',
  disabled: boolean,
  wide: boolean,
  onClick?: (event: Event) => void,
  children: React.Node
}

export const Button = ({
  type,
  size,
  color,
  disabled,
  wide,
  onClick,
  children,
  ...rest
}: Props) => {
  const isMobile = useStore($isMobile)

  if (disabled)
    return (
      <StyledButton
        type={type}
        size={size}
        color={color}
        isMobile={isMobile}
        disabled={true}
        wide={wide}
        {...rest}
      >
        {children}
      </StyledButton>
    )

  return (
    <StyledButton
      type={type}
      size={size}
      color={color}
      isMobile={isMobile}
      wide={wide}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  size: PropTypes.oneOf(['small', 'normal', 'big']).isRequired,
  color: PropTypes.oneOf(['neutral', 'success', 'warning', 'failure'])
    .isRequired,
  disabled: PropTypes.bool.isRequired,
  wide: PropTypes.bool.isRequired
}

Button.defaultProps = {
  type: 'button',
  size: 'normal',
  color: 'neutral',
  disabled: false,
  wide: false
}
