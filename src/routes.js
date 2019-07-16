import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Redirect } from 'react-router-dom'
import { standsRoutes } from '@features/stands'

const routes = [...standsRoutes, { render: () => <Redirect to="/stands" /> }]

export const Routes = () => renderRoutes(routes)
