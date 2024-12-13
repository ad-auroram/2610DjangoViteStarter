import './home.css'
import './forms.css'
import * as cookie from "cookie";
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

export function Edit(){
    const { id } = useParams();
    const [name, setName] = useState('')
    const [info, setInfo] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate()


    async function getCharacter(id) {
        const res = await fetch(`/char/${id}/`, {
            credentials: "same-origin",
        });
    
        if (res.ok) {
            const body = await res.json();
            setName(body.character.name);
            setInfo(body.character.info);
            setImage(body.character.avatar);
        } else {
            console.error("Failed to fetch character:", res.status);
        }
    }

    async function editCharacter(e) {
        e.preventDefault();
        const res = await fetch(`/edit/${id}/`, {
          method: "post",
          credentials: "same-origin",
          body: JSON.stringify({
            name,
            info,
            image,
        }),
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": cookie.parse(document.cookie).csrftoken
          }
        })
        navigate(`/character/${id}/`);
      }

      useEffect(() => {
        getCharacter(id);
    }, [id]);
      
    
      return (
          <form onSubmit={editCharacter}>
              <label htmlFor="character">Name:</label>
              <input
                  type="text"
                  id="character"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="char-info">Bio:</label>
              <textarea
                  id="char-info"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
              />
              <label htmlFor="image">Avatar (as an image link):</label>
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

export default Edit