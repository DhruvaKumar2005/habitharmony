import React from 'react'
import Intro3 from "../assets/Intro3.svg"
import { ArrowRight } from 'lucide-react'

const Auth = () => {
  const handleEmailLogin = () => {
    window.location.href = '/login'
  }

  return (
    <div style={{position: 'relative', height: '100vh'}}>
      <img src={Intro3} alt="intro 3" className='w-full h-full object-cover' style={{display:'block'}}/>
      <div 
        onClick={handleEmailLogin} 
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <span style={{marginRight: 8}}>Login with email</span>
        <ArrowRight />
      </div>
    </div>
  )
}

export default Auth