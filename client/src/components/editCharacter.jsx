import './home.css'
import './forms.css'

function handleSubmit(){
    //prevent default, watch the one tutorial ig
}

export function Edit(){
    //or just have them upload url from the web
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="character">Name:</label>
            <input type = "text" id="character" />
            <label htmlFor="char-info">Bio</label>
            <textarea type = "text" id="char-info" wrap="soft" />
            <label htmlFor="image">Avatar (as an image link)</label>
            <input type = "text" id="image" /> 
            <button id="submit" >Submit</button>
        </form>
        </>
    )
}

export default Edit