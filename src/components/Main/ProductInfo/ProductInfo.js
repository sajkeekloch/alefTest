import './ProductInfo.css'
import { data } from '../../data/mainData'
import ProductRate from './ProductRate/ProductRate';
import ProductPrice from './ProductPrice/ProductPrice';
import ProductSize from './ProductSize/ProductSize';
import AddToBucket from './AddToBucket/AddToBucket';
import ProductAdditionalInfo from './ProductAdditionalInfo/ProductAdditionalInfo';
import { useState } from 'react';

function ProductInfo() {

    const [size, setSize] = useState('')
    
    return(
        <div className='propductInfo'>
            <h2 className='productInfo__title'>
                { data.title }
            </h2>
            <span className='productInfo__art'> Арт. { data.art } </span>
            <ProductRate 
                rate = { data.rate }
                comments = { data.comments }
            />
            <ProductPrice 
                price = { data.price }
                actualPrice = { data.actualPrice }
                discounts = { data.discounts }
            />
            <ProductSize 
                setSize = { setSize }
                sizes = { data.sizes }
            />
            <p className='productInfo__defineSize'>
                Определить размер
            </p>
            <AddToBucket 
                size = { size }
                title = { data.title }
            />
            <p className='productInfo__oneClick'>
                Купить в 1 клик
            </p>
            <ProductAdditionalInfo />
        </div>
    )
}

export default ProductInfo