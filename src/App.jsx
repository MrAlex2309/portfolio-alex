import { useState } from 'react'
import './App.css'
import Starter from './page/Start/starter'
import AboutMe from './page/AboutMe/AboutMe'
import HomePage from './page/Home/HomePage'


const bgImage = {
  backgroundSize:'cover',
  height:'100vh',
  backgroundPosition: 'center'
}
const sizeFont = {
  fontSize:'15px'
}

function App() {
  return (
    <HomePage />
  )
}

export default App
