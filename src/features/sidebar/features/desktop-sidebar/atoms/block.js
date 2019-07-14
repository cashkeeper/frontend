import styled from 'styled-components'
import { zIndexes } from '@lib/constants/general'

export const Block = styled.div`
  position: relative;
  z-index: ${zIndexes.sidebar};
  width: 240px;
  height: 100%;
  padding: 48px 24px;
  overflow-y: auto;
  background-color: ${props => props.theme.elements.segment.colors.background};
  box-shadow: ${props => props.theme.general.shadows.defaultToRight};
`
