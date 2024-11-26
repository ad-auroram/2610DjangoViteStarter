import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export function Navbar(){
    const [count, setCount] = useState(0)
    
    async function logout() {
        const res = await fetch("/registration/logout/", {
        credentials: "same-origin", // include cookies!
        });
    
        if (res.ok) {
        // navigate away from the single page app!
        window.location = "/registration/sign_in/";
        } else {
        // handle logout failed!
        }
    }
    return(
        <>
        <header id="nav-bar">
            <section className="nav-container">
                <h1 id="nav-title">Home</h1>
            </section>
            <section className="nav-container">
            <button onClick={logout} className='nav-button'>New Character</button>
            <Link to="/profile" className='nav-button'>Profile</Link>
            <button onClick={logout} className='nav-button'>Logout</button>
            </section>
        </header>
        </>
    )
}

export default Navbar;