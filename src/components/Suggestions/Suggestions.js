import Gallery from './Gallery/Gallery'
import './Suggestions.css'

function Suggestions() {
    return(
        <div className='suggestions'>
            <p className='suggestions__watchAll'>Посмотреть все стили</p>
            <Gallery />
        </div>
    )
}

export default Suggestions