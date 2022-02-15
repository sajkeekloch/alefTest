import './AddToBucket.css'
import { useEffect, useState } from 'react'
import Counter from './Counter/Counter'
import LikeButton from './Like/LikeButton'

function AddToBucket(props) {

    const [count, setCount] = useState(0)
    const [buttonActive, setButtonActive] = useState(false)

    useEffect(() => {
        if (!count || !props.size) {
            setButtonActive(false)
        }
        else setButtonActive(true)
    }, [count, props.size])

    const handlePurchase = () => {
        alert(`Товар ${props.title}, размер ${props.size} в количестве ${count} добавлен в корзину`)
    }

    const handleLike = () => {
        alert(`Товар ${props.title} добавлен в избранное`)
    }

    return (
        <div className='addToBucket'>
            <Counter 
                count = { count }
                setCount = { setCount }
            />
            <button
                onClick={() => handlePurchase() }
                className={ buttonActive? 'addToBucket__button' : 'addToBucket__button disabled'}  
                disabled = { !buttonActive }
            >
                Добавить в корзину
            </button>
            <LikeButton 
                like = { handleLike }
            />
        </div>
    )
}

export default AddToBucket