// @flow
import React from 'react'
import { withRouter } from 'react-router-dom'
import { MobileSidebar } from './features/mobile-sidebar'
import { DesktopSidebar } from './features/desktop-sidebar'
import { type Link } from './types'

type Props = {
  name: string,
  links: Link[],
  isMobile: boolean,
  location: Location
}

const SidebarView = ({ name, links, isMobile, location }: Props) => {
  const { pathname: currentPath } = location

  if (isMobile) {
    return <MobileSidebar name={name} links={links} currentPath={currentPath} />
  }

  return <DesktopSidebar name={name} links={links} currentPath={currentPath} />
}

SidebarView.defaultProps = {
  name: 'Menu',
  isMobile: false
}

export const Sidebar = withRouter(SidebarView)
