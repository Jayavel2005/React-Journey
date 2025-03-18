import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import Background from './Background'
import UrlShortner from './UrlShortner'
const App = () => {
  return (
    <div className='main'>
        <Background/>
        <Login/>
        {/* <SignUp/> */}
    </div>
  )
}

export default App
