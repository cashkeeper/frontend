// @flow
import React from 'react'
import { List } from '../../../atoms/list'
import { ActiveSidebarLink, SidebarLink } from '../../../atoms/link'
import { type Link } from '../../../types'

type Props = {
  links: Link[],
  currentPath: string
}

export const Content = ({ links, currentPath }: Props) => {
  return (
    <List>
      {links.map(link => {
        return (
          <li key={link.name}>
            {link.to === currentPath ? (
              <ActiveSidebarLink>{link.name}</ActiveSidebarLink>
            ) : (
              <SidebarLink to={link.to}>{link.name}</SidebarLink>
            )}
          </li>
        )
      })}
    </List>
  )
}
