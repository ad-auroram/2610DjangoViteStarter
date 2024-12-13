import './home.css'
import './forms.css'
import * as cookie from "cookie";
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export function ImageForm(){
    
    const [image, setImage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()

    async function createImage(e) {
            e.preventDefault();
            const res = await fetch(`/new-image/${id}/`, {
            method: "POST",
            credentials: "same-origin",
            body: JSON.stringify({
                image,
            }),
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": cookie.parse(document.cookie).csrftoken
            }
            })
            const body = await res.json();
            navigate(`/character/${id}/`);
        }

    return (
        <form onSubmit={createImage}>
            <label htmlFor="image">Image url:</label>
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
export default ImageForm
