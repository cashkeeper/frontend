// @flow
import React from 'react'
import { Header, Segment, Grid, TextArea, InputGroup } from '@ui'

export const TextAreasStand = () => (
  <Grid.Container>
    <Header>Text Areas</Header>

    <Header size="small">Default</Header>
    <Segment>
      <InputGroup>
        <TextArea placeholder="Enter value.." />
      </InputGroup>
    </Segment>

    <Header size="small">Disabled</Header>
    <Segment>
      <InputGroup>
        <TextArea disabled={true} placeholder="Enter value.." />
      </InputGroup>
    </Segment>

    <Header size="small">4 rows</Header>
    <Segment>
      <InputGroup>
        <TextArea rows={4} placeholder="Enter value.." />
      </InputGroup>
    </Segment>

    <Header size="small">Min sizes</Header>
    <Segment>
      <Header size="tiny">400px min-width</Header>
      <InputGroup>
        <TextArea
          style={{ minWidth: 400 }}
          resizeX={true}
          placeholder="Enter value.."
        />
      </InputGroup>
      <Header size="tiny">200px min-height</Header>
      <InputGroup>
        <TextArea style={{ minHeight: 200 }} placeholder="Enter value.." />
      </InputGroup>
    </Segment>

    <Header size="small">Sizes</Header>
    <Segment>
      <Header size="tiny">Small</Header>
      <InputGroup>
        <TextArea size="small" placeholder="Enter value.." />
      </InputGroup>

      <Header size="tiny">Normal</Header>
      <InputGroup>
        <TextArea size="normal" placeholder="Enter value.." />
      </InputGroup>

      <Header size="tiny">Big</Header>
      <InputGroup>
        <TextArea size="big" placeholder="Enter value.." />
      </InputGroup>
    </Segment>

    <Header size="small">Fluid</Header>
    <Segment>
      <InputGroup>
        <TextArea fluid placeholder="Enter value.." />
      </InputGroup>
    </Segment>
  </Grid.Container>
)
