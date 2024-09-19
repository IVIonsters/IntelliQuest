/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './App.css'
import ParticlesBg from 'particles-bg'

// ParticlesBg options
const particlesOptions = {
  className: 'particles',
  type: 'cobweb',
  bg: true,
  num: 400,
  color: '#FFFFFF',
}


function App() {

  return (
    <div className='App'>
      <p>Hello, World</p>
      <ParticlesBg {...particlesOptions} />
    </div>
  )
}

export default App
