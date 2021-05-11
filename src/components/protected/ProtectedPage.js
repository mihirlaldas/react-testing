import React, { useState, useEffect } from 'react'

const ProtectedPage = () => {
  const [user, setUser] = useState('')
  const [getData, setGetData] = useState(false)
  useEffect(() => {
    if (getData) {
      fetch('/users')
        .then((res) => res.json())
        .then((user) => setUser(user))
    }
  }, [getData])

  return (
    <div className="App">
      <h1 data-testid="protected-page">Protected Page</h1>
      <button onClick={() => setGetData(true)}>get data</button>
      {user ? (
        <>
          <p>user - {user.name}</p>
          <p>location - {user.location}</p>
        </>
      ) : null}
    </div>
  )
}

export default ProtectedPage
