// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { List } from '../atoms/list'
import { ActiveSidebarLink, SidebarLink } from '../atoms/link'
import { type Link } from '../types'

type Props = {
  links: Link[],
  currentPath: string,
  onLinkClick?: (e: Event) => void
}

export const LinkList = ({ links, currentPath, onLinkClick }: Props) => {
  const renderedLinks = links.map(link => (
    <li key={link.name + '-' + link.to}>
      {link.to === currentPath ? (
        <ActiveSidebarLink>{link.name}</ActiveSidebarLink>
      ) : (
        <SidebarLink to={link.to} onClick={onLinkClick}>
          {link.name}
        </SidebarLink>
      )}
    </li>
  ))

  return <List>{renderedLinks}</List>
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func
}
