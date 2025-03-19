import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import Background from './Background'
import UrlShortner from './UrlShortner'
import { useState } from 'react'
const App = () => {

  const [page, setPage] = useState("Login")


  const pageRendering = () => {
    if (page === "Login")
      return <Login setPage={setPage} />
    if (page === 'SignUp')
      return <SignUp setPage={setPage} />
    return <UrlShortner setPage={setPage} />
  }

  return (
    <div className='main'>
      <Background />
      {pageRendering()}
    </div>
  )
}

export default App
