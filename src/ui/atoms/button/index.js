// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { type Properties as CSS } from 'csstype'

type Color = 'neutral' | 'success' | 'warning' | 'failure'
type State = 'initial' | 'hover' | 'active'

type Palette = {
  background: string,
  text: string
}

const getPalette = (color: Color, state: State, theme: any): Palette => {
  return theme.elements.button[color][state]
}

const sizeToValues = {
  small: {
    font: '12px',
    padding: '8px 16px 6px'
  },
  normal: {
    font: '14px',
    padding: '9px 18px 7px'
  },
  big: {
    font: '16px',
    padding: '10px 20px 8px'
  }
}

type Size = 'small' | 'normal' | 'big'
type SizeValues = {
  font: string,
  padding: string
}

const getSizeValues = (size: Size): SizeValues => {
  return sizeToValues[size]
}

type StyledProps = {
  size: Size,
  color: Color,
  fluid: boolean,
  theme: any
}

const StyledButton = styled.button(
  ({ size, color, fluid, theme }: StyledProps) => {
    const initialColors = getPalette(color, 'initial', theme)
    const hoverColors = getPalette(color, 'hover', theme)
    const activeColors = getPalette(color, 'active', theme)

    const sizeValues = getSizeValues(size)

    const width = fluid ? '100%' : 'auto'

    return {
      width,
      fontSize: sizeValues.font,
      lineHeight: 1.4,
      padding: sizeValues.padding,
      marginRight: 8,
      marginBottom: 8,
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
        backgroundColor: initialColors.background,
        color: initialColors.text,
        opacity: 0.6,
        cursor: 'default'
      },

      ':last-child': {
        marginRight: 0
      }
    }
  }
)

type Props = {
  type?: 'button' | 'submit' | 'reset',
  size?: Size,
  color?: Color,
  disabled?: boolean,
  fluid?: boolean,
  onClick?: (event: Event) => void,
  style?: CSS<string | number>,
  children: React.Node
}

export const Button = ({
  type = 'button',
  size = 'normal',
  color = 'neutral',
  disabled = false,
  fluid = false,
  children,
  ...rest
}: Props) => {
  return (
    <StyledButton
      type={type}
      size={size}
      color={color}
      disabled={disabled}
      fluid={fluid}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  color: PropTypes.oneOf(['neutral', 'success', 'warning', 'failure']),
  disabled: PropTypes.bool,
  fluid: PropTypes.bool
}
