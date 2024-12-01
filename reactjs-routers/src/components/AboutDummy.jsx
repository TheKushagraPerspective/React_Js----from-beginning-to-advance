import React from 'react'
import SplashScreen from './SplashScreenDummy'

const about = () => {

  const queryParams = new URLSearchParams(window.location.search)
  const topic = queryParams.get('topic');

  return (
    <div>
        <SplashScreen />
        <h1>Welcome to About us page, your topic is {topic ? topic : 'not specify'}</h1>
    </div>
  )
}

export default about
