import './home.css'
import './character.css'
import { Link, useParams, useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Character(){
    const { user } = useOutletContext();
    const { id } = useParams();
    const [character, setCharacter] = useState(null)
    const [images, updateImgs] = useState([])
    const [option, setOptions] = useState("")

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

    async function getImages(id) {
        const res = await fetch(`/imgs/${id}`, {
          credentials: "same-origin",
        })
    
        const body = await res.json();
        updateImgs(body.images)
      }

    useEffect(() => {
        if (id) {
            getCharacter(id);
            getImages(id)
        }
    }, [id]);

    useEffect(() => {
        if (user && character) {
            if (user.id === character.user) {
                setOptions(
                    <>
                        <Link to={`/image/${character.id}`} className="option" id="new">New Image</Link>
                        <Link to={`/edit/${character.id}`} id="edit" className="option">Edit</Link>
                    </>
                );
            }
        }
    }, [user, character]);


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
            {option}
            <h2>Gallery</h2>
            <div className='container'>
            {images.map((image) => (
                <div className='char-box' key={image.id}>
                    <img className='avatar' src={image.link}></img>
                </div>
            ))}
                            
            </div>
        </div>
        </>
    )
}

export default Character