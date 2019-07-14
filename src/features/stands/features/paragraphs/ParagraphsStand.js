// @flow
import React from 'react'
import { Header, Segment, Grid, Paragraph } from '@ui'

export const ParagraphsStand = () => (
  <Grid.Container>
    <Header>Paragraphs</Header>
    <Segment>
      <Paragraph>Default paragraph</Paragraph>
      <Paragraph size={12}>Paragraph with custom font size</Paragraph>
    </Segment>
  </Grid.Container>
)
