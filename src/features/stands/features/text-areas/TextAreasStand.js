// @flow
import React from 'react'
import { Header, Segment, Grid, TextArea } from '@ui'

export const TextAreasStand = () => (
  <Grid.Container>
    <Header>Text Areas</Header>

    <Header size="small">Default</Header>
    <Segment>
      <TextArea placeholder="Enter value.." />
    </Segment>

    <Header size="small">Disabled</Header>
    <Segment>
      <TextArea disabled={true} placeholder="Enter value.." />
    </Segment>

    <Header size="small">4 rows</Header>
    <Segment>
      <TextArea rows={4} placeholder="Enter value.." />
    </Segment>

    <Header size="small">Min sizes</Header>
    <Segment>
      <Header size="tiny">400px min-width</Header>
      <TextArea
        style={{ minWidth: 400 }}
        resizeX={true}
        placeholder="Enter value.."
      />

      <Header size="tiny">200px min-height</Header>
      <TextArea style={{ minHeight: 200 }} placeholder="Enter value.." />
    </Segment>

    <Header size="small">Sizes</Header>
    <Segment>
      <Header size="tiny">Small</Header>
      <TextArea size="small" placeholder="Enter value.." />

      <Header size="tiny">Normal</Header>
      <TextArea size="normal" placeholder="Enter value.." />

      <Header size="tiny">Big</Header>
      <TextArea size="big" placeholder="Enter value.." />
    </Segment>

    <Header size="small">Fluid</Header>
    <Segment>
      <TextArea fluid placeholder="Enter value.." />
    </Segment>
  </Grid.Container>
)
