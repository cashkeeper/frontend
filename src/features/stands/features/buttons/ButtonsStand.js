// @flow
import React from 'react'
import { Header, Segment, Button, Grid } from '@ui'

export const ButtonsStand = () => (
  <Grid.Container>
    <Header>Buttons</Header>

    <Header size="small">Default</Header>
    <Segment>
      <Button color="neutral">Neutral</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="failure">Failure</Button>
    </Segment>

    <Header size="small">Disabled</Header>
    <Segment>
      <Button color="neutral" disabled={true}>
        Neutral
      </Button>
      <Button color="success" disabled={true}>
        Success
      </Button>
      <Button color="warning" disabled={true}>
        Warning
      </Button>
      <Button color="failure" disabled={true}>
        Failure
      </Button>
    </Segment>

    <Header size="small">Sizes</Header>
    <Segment>
      <Header size="tiny">Small</Header>
      <Button size="small" color="neutral">
        Neutral
      </Button>
      <Button size="small" color="success">
        Success
      </Button>
      <Button size="small" color="warning">
        Warning
      </Button>
      <Button size="small" color="failure">
        Failure
      </Button>

      <Header size="tiny">Normal</Header>
      <Button size="normal" color="neutral">
        Neutral
      </Button>
      <Button size="normal" color="success">
        Success
      </Button>
      <Button size="normal" color="warning">
        Warning
      </Button>
      <Button size="normal" color="failure">
        Failure
      </Button>

      <Header size="tiny">Big</Header>
      <Button size="big" color="neutral">
        Neutral
      </Button>
      <Button size="big" color="success">
        Success
      </Button>
      <Button size="big" color="warning">
        Warning
      </Button>
      <Button size="big" color="failure">
        Failure
      </Button>
    </Segment>

    <Header size="small">Fluid</Header>
    <Segment>
      <Button fluid>Fluid button</Button>
    </Segment>
  </Grid.Container>
)
