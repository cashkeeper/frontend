// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '@ui'
import { type Link } from '../../types'
import { LinkList } from '../../molecules/link-list'
import { Block } from './atoms/block'

type Props = {
  name: string,
  links: Link[],
  currentPath: string
}

export const DesktopSidebar = ({ name, links, currentPath }: Props) => {
  return (
    <Block>
      <Header>{name}</Header>
      <LinkList links={links} currentPath={currentPath} />
    </Block>
  )
}

DesktopSidebar.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired
}
