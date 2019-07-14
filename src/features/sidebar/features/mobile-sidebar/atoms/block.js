import styled from 'styled-components'
import { zIndexes } from '@lib/constants/general'

export const Block = styled.div`
  position: relative;
  z-index: ${zIndexes.sidebar};
  width: 100%;
  background-color: ${props => props.theme.elements.segment.colors.background};
  box-shadow: ${props => props.theme.general.shadows.default};
`
