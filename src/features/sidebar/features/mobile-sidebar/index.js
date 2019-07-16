// @flow
import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Block } from './atoms/block'
import { Header } from './molecules/header'
import { ContentWrapper } from './atoms/content-wrapper'
import { type Link } from '../../types'
import { LinkList } from '@features/sidebar/molecules/link-list'

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
        <ContentWrapper>
          <LinkList
            links={links}
            currentPath={currentPath}
            onLinkClick={close}
          />
        </ContentWrapper>
      )}
    </Block>
  )
}

MobileSidebar.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired
}
