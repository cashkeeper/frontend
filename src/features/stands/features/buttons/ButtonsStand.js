// @flow
import React from 'react'
import { Header, Segment, Button, Grid } from '@ui'

export const ButtonsStand = () => (
  <Grid.Container>
    <Header>Buttons</Header>
    <Segment>
      <Header size="small">Default</Header>
      <Button color="neutral">Neutral</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="failure">Failure</Button>
    </Segment>
    <Segment>
      <Header size="small">Disabled</Header>
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
  </Grid.Container>
)
