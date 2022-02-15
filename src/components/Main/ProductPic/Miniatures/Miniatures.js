import './Miniatures.css'
import { data } from '../../../data/mainData'

function Miniatures(props) {
    
    const list = data.images.map((el, id) => {
        return (
            <li 
                onClick={() => props.handleClick(id) }
                className={id+1 === props.choosen?'minuatures__miniature choosen' : 'minuatures__miniature'}  
                key={ id }> 
                <img 
                    alt={ el }
                    className='minuature__image'
                    src={ require(`../../../images/${ el }.png`)}/>
            </li>
        )
    })

    return (
        <ul className='prodictPic__miniatures'>
            { list }
        </ul>
    )
}

export default Miniatures