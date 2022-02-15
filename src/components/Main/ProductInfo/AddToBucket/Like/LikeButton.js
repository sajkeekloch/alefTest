import './LikeButton.css'
import { useState } from 'react'
import Unliked from '../../../../images/unliked.svg'
import Liked from '../../../../images/liked.svg'

function LikeButton(props) {

    const[isLiked, setIsLiked] = useState(false)
    const handleLike = () => {
        setIsLiked(!isLiked)
        props.like()
    }

    return (
        <div 
            onClick={ handleLike}
            className='likeButton'>
            <img  
                alt='likeIcon'
                src={ isLiked? Liked : Unliked} />
        </div>
    )
}

export default LikeButton