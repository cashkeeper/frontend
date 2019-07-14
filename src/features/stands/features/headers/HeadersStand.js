// @flow
import React from 'react'
import { Header, Segment, Grid, Paragraph } from '@ui'

export const HeadersStand = () => (
  <Grid.Container>
    <Header>Headers</Header>
    <Segment>
      <Header size="tiny">Tiny header</Header>
      <Header size="small">Small header</Header>
      <Header size="normal">Normal header</Header>
      <Header size="big">Big header</Header>
    </Segment>
    <Segment>
      <Header sub>Sub header</Header>
    </Segment>
    <Segment>
      <Header>Header</Header>
      <Header sub size="tiny">
        with sub header
      </Header>
      <Paragraph>And with paragraph</Paragraph>
    </Segment>
  </Grid.Container>
)
