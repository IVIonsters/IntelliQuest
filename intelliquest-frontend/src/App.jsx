/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './App.css'
import ParticlesBg from 'particles-bg'
import Navbar from './components/Navbar/Navbar'

// ParticlesBg options
const particlesOptions = {
  className: 'particles',
  type: 'cobweb',
  bg: true,
  num: 70,
  color: '#FFFFFF',
}


function App() {

  return (
    <div className='App'>
      <ParticlesBg {...particlesOptions} />
      <Navbar />
    </div>
  )
}

export default App
