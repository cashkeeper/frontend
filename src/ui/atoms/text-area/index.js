// @flow
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
  return fluid ? '100%' : '240px'
}

const getResizeValue = (resizeX: boolean, resizeY: boolean) => {
  if (resizeX && resizeY) return 'both'
  if (resizeX) return 'horizontal'
  if (resizeY) return 'vertical'
  return 'none'
}

const select = props => {
  return props.theme.elements.input
}

const StyledTextArea = styled.textarea`
  display: block;
  width: ${props => props.width};
  max-width: 100%;
  margin-bottom: 8px;
  background-color: ${props => select(props).colors.background};
  color: inherit;
  font-size: ${props => props.sizeValues.font};
  line-height: 1.4;
  padding: ${props => props.sizeValues.padding};
  border: 1px solid ${props => select(props).colors.border.initial};
  border-radius: 5px;
  outline: none;

  resize: ${props => props.resizeValue};

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
  size?: Size,
  disabled?: boolean,
  fluid?: boolean,
  rows?: number,
  resizeX?: boolean,
  resizeY?: boolean,
  name?: string,
  placeholder?: string,
  value?: string,
  defaultValue?: string,
  onChange?: (v: string, e: Event) => void,
  style?: CSS<string | number>
}

export const TextArea = ({
  size = 'normal',
  disabled = false,
  fluid = false,
  rows = 2,
  resizeX = false,
  resizeY = true,
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  ...rest
}: Props) => {
  const sizeValues = getSizeValues(size)
  const width = getWidth(fluid)
  const resizeValue = getResizeValue(resizeX, resizeY)

  const wrappedOnChange = useCallback(
    event => {
      const value = event.target.value
      if (onChange) onChange(value, event)
    },
    [onChange]
  )

  return (
    <StyledTextArea
      sizeValues={sizeValues}
      width={width}
      resizeValue={resizeValue}
      rows={rows}
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

TextArea.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  rows: PropTypes.number,
  resizeX: PropTypes.bool,
  resizeY: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
}
