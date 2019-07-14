// @flow
import React from 'react'
import { Header, Segment, Grid, Paragraph } from '@ui'

export const SegmentsStand = () => (
  <Grid.Container>
    <Header>Segments</Header>
    <Header size="small">types</Header>
    <Segment>
      <Paragraph>This is the standard Segment (with shadow)</Paragraph>
    </Segment>
    <Segment type="with-border">
      <Paragraph>This is the Segment with border</Paragraph>
    </Segment>
    <Header size="small">padding sizes</Header>
    <Segment padding="small">
      <Paragraph>Small padding</Paragraph>
    </Segment>
    <Segment padding="normal">
      <Paragraph>Normal padding</Paragraph>
    </Segment>
    <Segment padding="big">
      <Paragraph>Big padding</Paragraph>
    </Segment>
    <Segment paddingX={20} paddingY={30}>
      <Paragraph>30px 20px</Paragraph>
    </Segment>
    <Segment paddingX={[10, 30]} paddingY={[20, 40]}>
      <Paragraph>10px 20px 30px 40px</Paragraph>
    </Segment>
  </Grid.Container>
)
