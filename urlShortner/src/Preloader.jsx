import React from 'react'
import loader from './assets/Loader Circles.gif'

const Preloader = () => {
  return (
    <div>
        <img src={loader} alt="preLoader" className='page--loader' />
    </div>
  )
}

export default Preloader
