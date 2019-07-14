import React from 'react'
import { Router as PureRouter } from 'react-router-dom'
import { history } from './history'

export const Router = ({ children }) => (
  <PureRouter history={history}>{children}</PureRouter>
)
