import './home.css'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react'

export function Home(){
    const { characters } = useOutletContext(); 
    const [max, setMax] = useState(10)  
    
    return (
        <>  
            <h2>Recents:</h2>
            <div className='container'>
            {characters.slice(0, max).map(character =>
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