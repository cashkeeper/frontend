// @flow
import React from 'react'
import { Redirect } from 'react-router-dom'
import { Stands } from './Stands'
import { innerRoutes } from './inner-routes'

const firstInnerRoutePath = innerRoutes[0].path

export const routes = [
  {
    path: '/stands',
    exact: true,
    render: () => <Redirect to={firstInnerRoutePath} />
  },
  {
    path: '/stands',
    component: Stands
  }
]
