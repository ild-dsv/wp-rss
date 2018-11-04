import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Head from '../Head'

export default class AppRoot extends Component {
  render () {
    const { route } = this.props
    return (
      <div>
        <Head />
        {renderRoutes(route.routes)}
      </div>
    )
  }
}
