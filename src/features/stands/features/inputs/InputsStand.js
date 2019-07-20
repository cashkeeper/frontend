// @flow
import React from 'react'
import { Header, Segment, Input, Grid, InputGroup } from '@ui'

export const InputsStand = () => {
  return (
    <Grid.Container>
      <Header>Inputs</Header>

      <Header size="small">Default</Header>
      <Segment>
        <InputGroup>
          <Input placeholder="Enter value.." />
        </InputGroup>
      </Segment>

      <Header size="small">Disabled</Header>
      <Segment>
        <InputGroup>
          <Input disabled={true} placeholder="Enter value.." />
        </InputGroup>
      </Segment>

      <Header size="small">Sizes</Header>
      <Segment>
        <Header size="tiny">Small</Header>
        <InputGroup>
          <Input size="small" placeholder="Enter value.." />
        </InputGroup>

        <Header size="tiny">Normal</Header>
        <InputGroup>
          <Input size="normal" placeholder="Enter value.." />
        </InputGroup>

        <Header size="tiny">Big</Header>
        <InputGroup>
          <Input size="big" placeholder="Enter value.." />
        </InputGroup>
      </Segment>

      <Header size="small">Fluid</Header>
      <Segment>
        <InputGroup>
          <Input fluid placeholder="Enter value.." />
        </InputGroup>
      </Segment>
    </Grid.Container>
  )
}
