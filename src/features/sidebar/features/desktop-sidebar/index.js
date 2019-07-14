// @flow
import React from 'react'
import { Block } from './atoms/block'
import { Header } from '@ui'
import { Content } from './molecules/content'
import { type Link } from '../../types'

type Props = {
  name: string,
  links: Link[],
  currentPath: string
}

export const DesktopSidebar = ({ name, links, currentPath }: Props) => {
  return (
    <Block>
      <Header>{name}</Header>
      <Content links={links} currentPath={currentPath} />
    </Block>
  )
}
