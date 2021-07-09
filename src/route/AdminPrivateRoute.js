import React, { useEffect, useState } from 'react'
import { useSelector, connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import * as fixedData from '../helper/settings'
import { getFullRoute } from '../helper/utility'

const {
  auth: { loginRoute }
} = fixedData.routeName

const AdminPrivateRoute = ({ component: Component, render, customState, token, ...rest }) => {
console.log('token is here ===============', token)
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          render ? render() : <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: getFullRoute(loginRoute)
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = state => ({
  token: state && state.admin && state.admin.app && state.admin.app.auth && state.admin.app.auth.token
})

export default connect(mapStateToProps)(AdminPrivateRoute)
