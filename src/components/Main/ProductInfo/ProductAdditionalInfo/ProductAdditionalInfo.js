import './ProductAdditionalInfo.css'
import Tshirt from '../../../images/t-shirt.svg'
import Clock from '../../../images/clock.svg'
import Card from '../../../images/card.svg'

function ProductAdditionalInfo() {
    return(
        <div className='productAdditionalInfo'>
            <p 
                className='productAdditionalInfo__item'
            >
                <img
                    className='item__image'
                    alt='t-shirt'
                    src= {Tshirt}
                />
                Описание товара</p>
            <p
                className='productAdditionalInfo__item'
            >
                <img
                    className='item__image'
                    alt='clock'
                    src= {Clock}
                />
                Доставка и возврат</p>
            <p
                className='productAdditionalInfo__item'
            >
               <img
                    className='item__image'
                    alt='card'
                    src= {Card}
                /> 
                Способы оплаты</p>
        </div>
    )
}

export default ProductAdditionalInfo