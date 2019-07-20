// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { MobileSidebar } from './features/mobile-sidebar'
import { DesktopSidebar } from './features/desktop-sidebar'
import { type Link } from './types'

type Props = {
  name?: string,
  links: Link[],
  isMobile?: boolean,
  location: Location
}

const SidebarView = ({
  name = 'Menu',
  links,
  isMobile = false,
  location
}: Props) => {
  const { pathname: currentPath } = location

  if (isMobile) {
    return <MobileSidebar name={name} links={links} currentPath={currentPath} />
  }

  return <DesktopSidebar name={name} links={links} currentPath={currentPath} />
}

SidebarView.propTypes = {
  name: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ).isRequired,
  isMobile: PropTypes.bool
}

export const Sidebar = withRouter(SidebarView)
