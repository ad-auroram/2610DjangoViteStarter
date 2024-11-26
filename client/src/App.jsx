import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Home from './components/home'
import Navbar from './components/navbar'


export function App(){
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}


export default App;
