// @flow
import React, { useState, useCallback } from 'react'
import { Block } from './atoms/block'
import { Header } from './molecules/header'
import { Content } from './molecules/content'
import { type Link } from '../../types'

type Props = {
  name: string,
  links: Link[],
  currentPath: string
}

export const MobileSidebar = ({ name, links, currentPath }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <Block>
      <Header name={name} isOpen={isOpen} toggle={toggle} />
      {isOpen && (
        <Content links={links} currentPath={currentPath} close={close} />
      )}
    </Block>
  )
}
