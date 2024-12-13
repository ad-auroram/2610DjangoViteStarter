import './home.css'
import { Link } from 'react-router-dom'
import * as cookie from "cookie";
import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';

export function Home(){
    const { user, characters } = useOutletContext();
    
    return (
        <>  
            <h2>Recents:</h2>
            <div className='container'>
            {characters.map(character =>
            <Link to={`/character/${character.id}`} className="char-box" key={character.id}>
                <div className="title">{character.name}</div>
                <img className="avatar" src={character.avatar} alt={`${character.name} avatar`} />
          </Link>
            )}
        </div>
        </>
    )
}

export default Home;