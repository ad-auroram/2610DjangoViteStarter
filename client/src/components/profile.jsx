import './home.css'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';

export function Profile() {
  const { user, characters } = useOutletContext();
  const userChars = [];
    console.log(characters)
    console.log(user)
    return(
        <>
        <div className='space'></div>
        <h2>{user.first_name}</h2>
        <h2>Characters:</h2>
        <div className='container'>
            <Link to="/character" className='char-box'>
                <div className='title'>guy here</div>
                <img className='avatar' src='https://f2.toyhou.se/file/f2-toyhou-se/users/JustMoosh?2'></img>
            </Link>
            <div className='char-box'>
                <div className='title'>guy here</div>
                <div className='avatar'>woah info</div>
            </div>
            <div className='char-box'>
                <div className='title'>guy here</div>
                <div className='avatar'>woah info</div>
            </div>
        </div>
        </>
    )
}

export default Profile