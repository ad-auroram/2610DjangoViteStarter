import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/navbar'



export function App(){
  const [user, setUser] = useState(null);
  const [characters, updateChars] = useState([])

  async function getUser() {
    const res = await fetch('/me/', {
      credentials: "same-origin",
    });
    const body = await res.json();
    setUser(body.user);
  }

  async function getCharacters() {
    const res = await fetch("/characters/", {
      credentials: "same-origin",
    })

    const body = await res.json();
    updateChars(body.characters)
  }

  useEffect(() => {
    getUser();
    getCharacters();
  }, [])
  
  return (
    <>
      <Navbar />
      <Outlet context={{ user, characters}}/>
    </>
  )
}


export default App;
