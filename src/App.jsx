import React, { useState } from 'react'
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null)

  const handleLoginSuccess = (user) => {
    setLoggedInUser(user)
  }

  const handleLogout = () => {
    setLoggedInUser(null)
  }

  return (
    <div className="grid w-[100%] h-screen place-items-center bg-gradient-to-r from-blue-900 to-cyan-700">
      {loggedInUser ? (
        <Dashboard user={loggedInUser} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  )
}

export default App