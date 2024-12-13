import './home.css'
import './character.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Character(){
    const { id } = useParams();
    const [character, setCharacter] = useState(null)

    async function getCharacter(id) {
        const res = await fetch(`/char/${id}/`, {
            credentials: "same-origin",
        });
    
        if (res.ok) {
            const body = await res.json();
            setCharacter(body.character);
        } else {
            console.error("Failed to fetch character:", res.status);
        }
    }

    useEffect(() => {
        if (id) {
            getCharacter(id);
        }
    }, [id]);

    if (!character) {
        return <p>Loading...</p>;
    }

    return(
        <>
        <div className='space'></div>
        <div id='container'>
            <div id='top'>
                <img id='avatar' src={character.avatar}></img>
                <h1 id='name'>{character.name}</h1>
            </div>
            <div id='info'>
                {character.info}
            </div>
            <Link to={`/image/${character.id}`}className='option' id='new'>New Image</Link>
            <Link to={`/edit/${character.id}`} id='edit' className='option'>Edit</Link>
            <h2>Gallery</h2>
            <div className='container'>
                <div className='char-box'>
                    <div className='title'>guy here</div>
                    <div className='avatar'>woah info</div>
                </div>
                <div className='char-box'>
                <div className='title'>guy here</div>
                <div className='avatar'>woah info</div>
            </div>
            <div className='char-box'>
                <div className='title'>guy here</div>
                <div className='avatar'>woah info</div>
            </div>
            
            </div>
        </div>
        </>
    )
}

export default Character