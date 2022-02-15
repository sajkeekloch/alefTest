import './GalleryItem.css'
import Cart from '../../../images/galleryCart.svg'
import Frame from '../../../images/frame.svg'
import GalleryLikes from '../../../images/galleryLikes.svg'

function GalleryItem(props) {

    const [imageName, likes] = [...props.value]

    return (
        <div className='galleryItem'>
            <div className='galleryItem__background'>
            <img 
                    className='background__frame'
                    alt='Frame'
                    src={ Frame }
                />
                <div className='background__cart'>
                    <img 
                        className='cart__icon'
                        alt='cart'
                        src={ Cart }
                    />
                    <p className='cart__text'>
                        Узнай, что на мне
                    </p>
                </div>
                <div className='background__likes'>
                    <img 
                        className='likes__icon'
                        alt='likes'
                        src={ GalleryLikes }
                    />
                    <p className='likes__number'>
                        { likes }
                    </p>
                </div>
            </div>
            <img 
                className='galleryItem__image'
                alt='galleryImage'
                src={ require(`../../../images/${imageName}.png`) }
            />
        </div>
    )
}

export default GalleryItem