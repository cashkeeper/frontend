// @flow
import React from 'react'
import { Header, Segment, Input, Grid, InputLabel } from '@ui'

export const InputsStand = () => {
  return (
    <Grid.Container>
      <Header>Inputs</Header>

      <Header size="small">Default</Header>
      <Segment>
        <Input placeholder="Enter value.." />
      </Segment>

      <Header size="small">With label</Header>
      <Segment>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input name="name" placeholder="Enter your name.." />
      </Segment>

      <Header size="small">Disabled</Header>
      <Segment>
        <Input disabled={true} placeholder="Enter value.." />
      </Segment>

      <Header size="small">Sizes</Header>
      <Segment>
        <Header size="tiny">Small</Header>
        <Input size="small" placeholder="Enter value.." />

        <Header size="tiny">Normal</Header>
        <Input size="normal" placeholder="Enter value.." />

        <Header size="tiny">Big</Header>
        <Input size="big" placeholder="Enter value.." />
      </Segment>

      <Header size="small">Fluid</Header>
      <Segment>
        <Input fluid placeholder="Enter value.." />
      </Segment>
    </Grid.Container>
  )
}
