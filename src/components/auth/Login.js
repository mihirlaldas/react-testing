import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useAuth } from './AuthProvider'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const history = useHistory()
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'demo' && password === 'demo') {
      login()
      setTimeout(() => {
        history.push('/protected')
      }, 2000)
    }
  }
  return (
    <div className="App">
      <h1 data-testid="login-form">Login Form</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" data-testid="username" value={username} onChange={handleUsername} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" data-testid="password" value={password} onChange={handlePassword} />
        <br />
        <button data-testid="login-btn" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
