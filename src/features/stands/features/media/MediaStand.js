// @flow
import React from 'react'
import { Header, Segment, Grid, Paragraph, Media } from '@ui'

export const MediaStand = () => (
  <Grid.Container>
    <Header>Media</Header>
    <Media on="xl">
      <Segment>
        <Paragraph>This segment is visible only on 'xl' breakpoint</Paragraph>
      </Segment>
    </Media>
    <Media from="sm">
      <Segment>
        <Paragraph>This segment is visible on 'sm'+ breakpoints</Paragraph>
      </Segment>
    </Media>
    <Media to="lg">
      <Segment>
        <Paragraph>This segment is visible on 'lg'- breakpoints</Paragraph>
      </Segment>
    </Media>
    <Media on={['xs', 'md', 'xl']}>
      <Segment>
        <Paragraph>
          This segment is visible on 'xs', 'md' and 'xl' breakpoints
        </Paragraph>
      </Segment>
    </Media>
  </Grid.Container>
)
