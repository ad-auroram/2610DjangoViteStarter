import './home.css'
import './forms.css'

function handleSubmit(){
    //prevent default, watch the one tutorial ig
}

export function New(user){
    //have it autofill character info
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

export default New