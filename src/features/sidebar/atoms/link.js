import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const linkBase = css`
  display: block;
  padding: 8px 0;
  font-size: 14px;
  color: black;
`

export const SidebarLink = styled(Link)`
  ${linkBase}

  color: inherit;
  text-decoration: none;
  opacity: 0.65;

  &:hover {
    opacity: 1;
  }
`

export const ActiveSidebarLink = styled.span`
  ${linkBase}

  font-weight: 500;
  cursor: default;
`
