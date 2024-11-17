import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/main'
import Navbar from './components/navbar'


export function App(){
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}


export default App;
