import { renderRoutes } from 'react-router-config'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { standsRoutes } from '@features/stands'

const routes = [...standsRoutes, { render: () => <Redirect to="/stands" /> }]

export const Routes = () => renderRoutes(routes)
