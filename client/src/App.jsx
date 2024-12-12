import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/navbar'



export function App(){
  const [user, setUser] = useState(null);

async function getUser() {
  const res = await fetch('/me/', {
    credentials: "same-origin",
  });
  const body = await res.json();
  setUser(body.user);
}

useEffect(() => {
  getUser();
  //getNotes();
}, [])

  return (
    <>
      <Navbar />
      <Outlet user={user}/>
    </>
  )
}


export default App;
