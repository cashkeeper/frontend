// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { type Properties as CSS } from 'csstype'

const sizeToValues = {
  small: {
    font: '12px',
    padding: '8px 11px'
  },
  normal: {
    font: '14px',
    padding: '9px 12px'
  },
  big: {
    font: '16px',
    padding: '11px 14px'
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

const getWidth = (fluid: boolean) => {
  return fluid ? '100%' : '160px'
}

const select = props => {
  return props.theme.elements.input
}

const passwordInputStyles = css`
  font-family: monospace;

  &::placeholder {
    font-family: ${props => props.theme.general.fontFamily}, sans-serif;
  }
`

const StyledInput = styled.input`
  ${props => props.type === 'password' && passwordInputStyles}

  width: ${props => props.width};
  max-width: 100%;
  margin-bottom: 8px;
  background-color: ${props => select(props).colors.background};
  color: inherit;
  font-size: ${props => props.sizeValues.font};
  line-height: ${props => props.sizeValues.font};
  padding: ${props => props.sizeValues.padding};
  border: 1px solid ${props => select(props).colors.border.initial};
  border-radius: 5px;
  outline: none;

  transition: border-color 0.1s ease;

  &::placeholder {
    transition: color 0.1s ease;
    color: ${props => select(props).colors.placeholder.initial};
  }

  &:focus {
    border: 1px solid ${props => select(props).colors.border.focused};

    &::placeholder {
      color: ${props => select(props).colors.placeholder.focused};
    }
  }

  &:disabled {
    background-color: ${props => select(props).colors.background};
    opacity: 0.6;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

type Props = {
  type?: 'text' | 'password' | 'number' | 'hidden',
  size?: Size,
  disabled?: boolean,
  fluid?: boolean,
  name?: string,
  placeholder?: string,
  value?: string,
  defaultValue?: string,
  onChange?: (v: String, e: Event) => void,
  style?: CSS<string | number>
}

export const Input = ({
  type = 'text',
  size = 'normal',
  disabled = false,
  fluid = false,
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  ...rest
}: Props) => {
  const sizeValues = getSizeValues(size)
  const width = getWidth(fluid)

  const wrappedOnChange = React.useCallback(
    event => {
      const value = event.target.value
      if (onChange) onChange(value, event)
    },
    [onChange]
  )

  return (
    <StyledInput
      type={type}
      sizeValues={sizeValues}
      width={width}
      disabled={disabled}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={wrappedOnChange}
      {...rest}
    />
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'number', 'hidden']),
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
}
