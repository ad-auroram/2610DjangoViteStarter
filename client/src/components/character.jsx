import './home.css'
import './character.css'
import { Link } from 'react-router-dom'

export function Character(){
    return(
        <>
        <div className='space'></div>
        <div id='container'>
            <div id='top'>
                <img id='avatar' src='https://f2.toyhou.se/file/f2-toyhou-se/users/JustMoosh?2'></img>
                <h1 id='name'>Name</h1>
            </div>
            <div id='info'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ullamcorper metus. Maecenas euismod lectus eu consequat egestas. Fusce sed felis fringilla, mattis enim ac, ullamcorper ex. Donec eu egestas libero, sed facilisis neque. In ut facilisis metus. Nulla hendrerit velit ante, ac finibus mi hendrerit non. Vivamus ullamcorper convallis ex, ut dignissim ipsum tempor quis.

Aliquam mi felis, tempus in elit nec, euismod pretium ante. Quisque ornare ornare elit. Quisque vitae faucibus lorem. Praesent a quam magna. Morbi ac felis augue. Aliquam gravida neque malesuada elit pellentesque accumsan. In eu justo eu justo tincidunt tristique. Curabitur hendrerit mi eget massa consectetur consequat. Sed auctor pulvinar turpis quis porttitor. Suspendisse interdum viverra finibus. Sed a viverra turpis, vel hendrerit dui. Mauris dignissim dolor ac lectus sodales, et convallis enim tincidunt.

In interdum purus quis tellus pretium dignissim. Maecenas et bibendum erat. Morbi non purus leo. Maecenas congue, dolor id tincidunt condimentum, libero nibh tempus leo, ut rhoncus lectus orci efficitur magna. Aliquam at diam non metus gravida lacinia sit amet non mauris. Donec nisi dolor, cursus in quam et, accumsan condimentum est. Donec neque neque, aliquam eget sollicitudin a, luctus id velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur at nisi ac eros pellentesque sagittis pulvinar vitae nisl. Morbi semper in magna vestibulum aliquam. 
            </div>
            <button className='option' id='new'>New Image</button>
            <Link to="/edit" id='edit' className='option'>Edit</Link>
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