// @flow
import React from 'react'
import styled from 'styled-components'
import { List } from '../../../atoms/list'
import { ActiveSidebarLink, SidebarLink } from '../../../atoms/link'

const StyledContent = styled.div`
  max-height: 360px;
  padding: 20px;
  overflow-y: auto;
`

type Props = {
  links: Array<{ name: string, to: string }>,
  currentPath: string,
  close: () => void
}

export const Content = ({ links, currentPath, close }: Props) => {
  return (
    <StyledContent>
      <List>
        {links.map(link => {
          return (
            <li key={link.name}>
              {link.to === currentPath ? (
                <ActiveSidebarLink>{link.name}</ActiveSidebarLink>
              ) : (
                <SidebarLink to={link.to} onClick={close}>
                  {link.name}
                </SidebarLink>
              )}
            </li>
          )
        })}
      </List>
    </StyledContent>
  )
}
