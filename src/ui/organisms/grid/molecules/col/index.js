// @flow
import * as React from 'react'
import styled from 'styled-components'
import { useStore } from 'effector-react'
import { $breakpoint } from '../../../../lib/models'
import { columnsNumber } from '../../../../constants'

const columnWidth = 100 / columnsNumber

const mapToPrev = {
  xl: 'lg',
  lg: 'md',
  md: 'sm',
  sm: 'xs',
  xs: null
}

const traverse = ({ breakpoint, settings, fallback }) => {
  let current = breakpoint

  while (current) {
    const setting = settings[current]

    if (setting != null) {
      const value = setting * columnWidth
      const finalValue = value % 1 === 0 ? value : value.toFixed(6)

      return finalValue + '%'
    }

    current = mapToPrev[current]
  }

  return fallback
}

export const StyledCol = styled.div`
  flex: ${props => (props.grow ? 1 : 0)} 0 ${props => props.width};
  max-width: ${props => props.width};
  margin-left: ${props => props.offset};
  padding-left: 12px;
  padding-right: 12px;
`

type Props = {
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  offsetXS?: number,
  offsetSM?: number,
  offsetMD?: number,
  offsetLG?: number,
  offsetXL?: number,
  children: React.Node
}

export const Col = ({
  xs,
  sm,
  md,
  lg,
  xl,
  offsetXS,
  offsetSM,
  offsetMD,
  offsetLG,
  offsetXL,
  children,
  ...rest
}: Props) => {
  const breakpoint = useStore($breakpoint)

  const width = traverse({
    breakpoint,
    settings: { xs, sm, md, lg, xl },
    fallback: 'auto'
  })

  const grow = width === 'auto'

  const offset = traverse({
    breakpoint,
    settings: {
      xs: offsetXS,
      sm: offsetSM,
      md: offsetMD,
      lg: offsetLG,
      xl: offsetXL
    },
    fallback: '0'
  })

  return (
    <StyledCol width={width} grow={grow} offset={offset} {...rest}>
      {children}
    </StyledCol>
  )
}
