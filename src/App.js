// @flow
import React from 'react'
import styled from 'styled-components'
import { Button, Header, Paragraph, Segment, Grid, Media } from '@ui'
import { GlobalStyle } from './GlobalStyle'

const Presentation = styled.div`
  margin: 0 auto;
  padding: 50px 20px;
  width: 100%;
  max-width: 800px;
`

const Stand = ({ title, children }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{ fontSize: 24 }}>{title}</h2>
    {children}
  </div>
)

const Part = ({ title, children }) => (
  <div style={{ marginBottom: 16 }}>
    <h3 style={{ fontSize: 15 }}>{title}</h3>
    {children}
  </div>
)

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Presentation>
        <Stand title="Buttons">
          <Part title="default">
            <Button color="neutral">Neutral</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="failure">Failure</Button>
          </Part>
          <Part title="disabled">
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
          </Part>
        </Stand>
        <Stand title="Headers">
          <Header size="big">Big header</Header>
          <Header size="normal">Normal header</Header>
          <Header size="small">Small header</Header>
          <div />
          <Header size="tiny" sub>
            Sub header
          </Header>
        </Stand>
        <Stand title="Parapraph">
          <Paragraph>Paragraph</Paragraph>
        </Stand>
        <Stand title="Headers + Paragraph">
          <Header>Lorem ipsum!</Header>
          <Header size="tiny" sub>
            dolor sit amet
          </Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
            dapibus ex. Cras rhoncus enim at venenatis ullamcorper. Aliquam erat
            volutpat. Donec malesuada purus nec arcu hendrerit sodales. Nulla
            condimentum hendrerit massa eleifend viverra. Nullam ipsum ex,
            bibendum quis ligula ut, tristique sodales ipsum. Aliquam convallis
            euismod nunc in aliquam.
          </Paragraph>
        </Stand>
        <Stand title="Blocks">
          <Segment>
            <Header size="small">This is the block with shadow</Header>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a dapibus ex. Cras rhoncus enim at venenatis ullamcorper.
            </Paragraph>
          </Segment>
          <Segment type="with-border">
            <Header size="small">This is the block with border</Header>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a dapibus ex. Cras rhoncus enim at venenatis ullamcorper.
            </Paragraph>
          </Segment>
        </Stand>
        <Stand title="Grid">
          <Grid.Row guttersY={true}>
            <Grid.Col xs={12} sm={6} xl={3}>
              <Segment>
                <Header>Test</Header>
                <Paragraph>Hello</Paragraph>
              </Segment>
            </Grid.Col>
            <Grid.Col xs={12} sm={6} xl={3} offsetSM={3} offsetXL={3}>
              <Segment>
                <Header>Test</Header>
                <Paragraph>Hello</Paragraph>
              </Segment>
            </Grid.Col>
            <Grid.Col xs={12} sm={6} xl={3} offsetSM={6} offsetXL={0}>
              <Segment>
                <Header>Test</Header>
                <Paragraph>Hello</Paragraph>
              </Segment>
            </Grid.Col>
          </Grid.Row>
        </Stand>
        <Stand title="Media">
          <Media to="md">
            <Segment>
              <Header size="tiny">
                This segment is visible on 'xs', 'sm' and 'md' breakpoints
              </Header>
            </Segment>
          </Media>
          <Media on={['xs', 'sm']}>
            <Segment>
              <Header size="tiny">
                This segment is visible on 'xs' and 'sm' breakpoints
              </Header>
            </Segment>
          </Media>
          <Media from="md">
            <Segment>
              <Header size="tiny">
                This segment is visible on 'md'+ breakpoints
              </Header>
            </Segment>
          </Media>
          <Media on="xl">
            <Segment>
              <Header size="small">
                This segment is visible on 'xl' breakpoint
              </Header>
            </Segment>
          </Media>
        </Stand>
      </Presentation>
    </>
  )
}
