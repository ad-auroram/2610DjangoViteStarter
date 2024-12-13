import './home.css'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react'

export function Profile() {
    const { user, characters } = useOutletContext();
  const [userChars, setChars] = useState(null);


    useEffect(() => {
        if (user && characters) {
          const myChars = characters.filter(
            (character) => character.user === user.id
          );
          setChars(myChars);
        }
      }, [user, characters]);
      if (!userChars) {
        return <p>No characters yet!</p>;
      }

      
      

    return(
        <>
        <div className='space'></div>
        <h2>{user.first_name}</h2>
        <h2>Characters:</h2>
        <div className='container'>
            {userChars.map((char) => (
                <Link to={`/character/${char.id}`} className='char-box' key={char.id}>
                    <div className='title'>{char.name}</div>
                    <img className='avatar' src={char.avatar}></img>
                </Link>
            ))}
        </div>
        </>
    )
}


export default Profile