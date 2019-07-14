// @flow
import React from 'react'
import { renderRoutes } from 'react-router-config'
import { StandsTemplate, $isMobile } from '@ui'
import { Sidebar } from '@features/sidebar'
import { useStore } from 'effector-react'
import { innerRoutes } from './inner-routes'

const links = [
  { name: 'Buttons', to: '/stands/buttons' },
  { name: 'Headers', to: '/stands/headers' },
  { name: 'Segments', to: '/stands/segments' },
  { name: 'Paragraphs', to: '/stands/paragraphs' },
  { name: 'Grid', to: '/stands/grid' },
  { name: 'Media', to: '/stands/media' }
]

export const Stands = () => {
  const isMobile = useStore($isMobile)

  return (
    <StandsTemplate
      isMobile={isMobile}
      sidebar={<Sidebar name="Stands" links={links} isMobile={isMobile} />}
    >
      {renderRoutes(innerRoutes)}
    </StandsTemplate>
  )
}
