import './home.css'
import './forms.css'
import * as cookie from "cookie";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export function New(user){
    const [character, setCharacter] = useState('');
    const [info, setInfo] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate()

    async function createCharacter(e) {
        e.preventDefault();
        const res = await fetch("/new/", {
          method: "post",
          credentials: "same-origin",
          body: JSON.stringify({
            character,
            info,
            image,
        }),
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": cookie.parse(document.cookie).csrftoken
          }
        })
        const body = await res.json();
        navigate(`/profile/`);
      }
      
    
      return (
          <form onSubmit={createCharacter}>
              <label htmlFor="character">Name:</label>
              <input
                  type="text"
                  id="character"
                  value={character}
                  onChange={(e) => setCharacter(e.target.value)}
              />
              <label htmlFor="char-info">Bio:</label>
              <textarea
                  id="char-info"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
              />
              <label htmlFor="image">Avatar url:</label>
              <input
                  type="text"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
              />
              <button id="submit">Submit</button>
          </form>
      );
    }
export default New