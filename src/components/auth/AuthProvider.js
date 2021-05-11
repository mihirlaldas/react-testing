import React, { useState, createContext } from 'react'

const AuthContext = createContext({
  loggedIn: false,
  login: () => {},
})

export const AuthProvider = ({ children }) => {
  const [loggedIn, setloggedIn] = useState(false)

  const login = () => {
    setloggedIn(true)
  }

  return <AuthContext.Provider value={{ loggedIn, login }}>{children}</AuthContext.Provider>
}

export const useAuth = () => React.useContext(AuthContext)

export default AuthContext
