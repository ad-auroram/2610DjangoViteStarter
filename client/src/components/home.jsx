import './home.css'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react'

export function Home(){
    const { characters } = useOutletContext(); 
    const [max, setMax] = useState(10) 
    const [showButton, setShowButton] = useState(true);
    
    async function seeMore(){
        setMax(characters.length)
        setShowButton(false);
    }
    
    return (
        <>  
            <h2>Recents:</h2>
            <div className='container'>
            {characters.slice(0, max).map(character =>
            <Link to={`/character/${character.id}`} className="char-box" key={character.id}>
                <div className="title">{character.name}</div>
                <img className="avatar" src={character.avatar||"https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-479x512-n8sg74wg.png"}/>
            </Link>
            )}
            </div>
            {showButton && <button onClick={seeMore} id='more'>See More</button>}
        </>
    )
}

export default Home;