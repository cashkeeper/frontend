// @flow
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Icon } from '@ui'

const withBorder = css`
  border-bottom: 1px solid ${props => props.theme.general.colors.borderLight};
`

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  ${props => props.isOpen && withBorder}
`

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
`

const IconBlock = styled.div`
  cursor: pointer;
  user-select: none;
  padding: 8px;
`

type Props = {
  name: string,
  isOpen: boolean,
  toggle: () => void
}

export const Header = ({ name, isOpen, toggle }: Props) => {
  return (
    <StyledHeader isOpen={isOpen}>
      <Title>{name}</Title>
      <IconBlock onClick={toggle}>
        <Icon name="menu" size={16} />
      </IconBlock>
    </StyledHeader>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}
