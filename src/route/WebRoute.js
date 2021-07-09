import React from 'react'
import { Route } from 'react-router-dom'

import { FooterAndSearch, Header } from '../pages/web/commonUI'

const WebRoute = ({ component: Component, render, customState, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Header />
          {render ? (
            render()
          ) : (
            <Component {...props} location={{ ...props.location, state: { ...props.location.state, ...customState } }} />
          )}
          <FooterAndSearch />
        </>
      )}
    />
  )
}

export default WebRoute
