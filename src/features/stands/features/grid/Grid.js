// @flow
import React from 'react'
import { Header, Segment, Grid } from '@ui'

export const GridStand = () => (
  <Grid.Container>
    <Header>Grid</Header>
    <Header size="small">4 columns</Header>
    <Grid.Row>
      <Grid.Col>
        <Segment>Column #1</Segment>
      </Grid.Col>
      <Grid.Col>
        <Segment>Column #2</Segment>
      </Grid.Col>
      <Grid.Col>
        <Segment>Column #3</Segment>
      </Grid.Col>
      <Grid.Col>
        <Segment>Column #4</Segment>
      </Grid.Col>
    </Grid.Row>
    <Header size="small">4 columns with Y-axis gutters</Header>
    <Grid.Row guttersY={true}>
      <Grid.Col>
        <Segment>Column #1</Segment>
      </Grid.Col>
      <Grid.Col>
        <Segment>Column #2</Segment>
      </Grid.Col>
      <Grid.Col>
        <Segment>Column #3</Segment>
      </Grid.Col>
      <Grid.Col>
        <Segment>Column #4</Segment>
      </Grid.Col>
    </Grid.Row>
    <Header size="small">4 columns with custom breakpoints</Header>
    <Grid.Row guttersY={true}>
      <Grid.Col xs={12} md={4} lg={3} xl={3}>
        <Segment>Column #1</Segment>
      </Grid.Col>
      <Grid.Col xs={12} md={4} lg={5} xl={3}>
        <Segment>Column #2</Segment>
      </Grid.Col>
      <Grid.Col xs={12} md={4} lg={2} xl={3}>
        <Segment>Column #3</Segment>
      </Grid.Col>
      <Grid.Col xs={12} lg={2} xl={3}>
        <Segment>Column #4</Segment>
      </Grid.Col>
    </Grid.Row>
    <Header size="small">offset</Header>
    <Grid.Row guttersY={true}>
      <Grid.Col xs={12} sm={4} offsetSM={1}>
        <Segment>Column #1</Segment>
      </Grid.Col>
      <Grid.Col xs={12} sm={4} offsetSM={2}>
        <Segment>Column #2</Segment>
      </Grid.Col>
    </Grid.Row>
  </Grid.Container>
)
