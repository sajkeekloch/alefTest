import './ProductRate.css'
import filledStar from '../../../images/rateStarFilled.svg'
import emptyStar from '../../../images/rateStarEmpty.svg'

function ProductRate(props) {

    let stars = []
    for (let i = 0; i < 5; i++) {
        if (i < props.rate) {
            stars.push(
                <img    
                    key={ props.rate + i }
                    alt='star'
                    src={ filledStar }
                />
            )
        }
        else {
            stars.push(
                <img 
                    key={ props.rate + i }
                    alt='star'
                    src={ emptyStar }
                />
            )
        }
    }

    const starsToRender = stars.map(el => el)

    return (
        <div className='productInfo__rate'>
            Отзывы
            <span className='rate__stars'>
                { starsToRender }
            </span>
            {props.comments.length} отзывов 
        </div>
    )
}

export default ProductRate