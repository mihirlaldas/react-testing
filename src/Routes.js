import React from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router'
import Login from './components/auth/Login'
import NumberDisplay from './components/display/NumberDisplay'
import Home from './Home'
import { useAuth } from './components/auth/AuthProvider'
import ProtectedPage from './components/protected/ProtectedPage'

export const ProtectedRoute = (props) => {
  const { pathname } = useLocation()
  const { loggedIn } = useAuth()
  return loggedIn ? <Route {...props} /> : <Redirect to={{ pathname: '/login', state: { previousPath: pathname } }} />
}

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/number" render={() => <NumberDisplay number={1} />} />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/protected" component={ProtectedPage} />
    </Switch>
  )
}

export default Routes
