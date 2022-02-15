import { data } from '../../data/suggestionsData'
import './Gallery.css'
import GalleryItem from './GalleryItem/GalleryItem'

function Gallery() {


    const items = Object.keys(data).map(el => {
        return (
            <GalleryItem 
                key = { el }
                value = { data[el] }
            />
        )
    })

    return(
        <div className='gallery'>
            { items }
        </div>
    )
}

export default Gallery