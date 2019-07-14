// @flow
import * as React from 'react'
import styled, { css } from 'styled-components'

const StandsBlock = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  height: 100%;
`

const SidebarBlock = styled.div`
  flex-grow: 0;
`

const paddingsX = css`
  padding-left: 24px;
  padding-right: 24px;
`

const ContentBlock = styled.div`
  flex-grow: 1;
  padding-top: 48px;
  padding-bottom: 48px;

  ${props => !props.isMobile && paddingsX}

  overflow-y: auto;
`

type Props = {
  sidebar: React.Node,
  isMobile: boolean,
  children: React.Node
}

export const StandsTemplate = ({ sidebar, isMobile, children }: Props) => {
  const direction = isMobile ? 'column' : 'row'

  return (
    <StandsBlock direction={direction}>
      <SidebarBlock>{sidebar}</SidebarBlock>
      <ContentBlock isMobile={isMobile}>{children}</ContentBlock>
    </StandsBlock>
  )
}
