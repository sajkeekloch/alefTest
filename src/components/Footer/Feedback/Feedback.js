import './Feedback.css'
import isValid from '../../isEmailValid/isEmailValid'
import { useState } from 'react'

function Feedback() {

    const [inputValue, setInputValue] = useState('')
    const [valid, setValid] = useState(false)

    const handleInput = (e) => {
        setInputValue(e.target.value)
        setValid(isValid(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(inputValue)
    }

    return(
        <form 
            disabled = { valid }
            onSubmit={ (event) => handleSubmit(event) }
            className='feedback'>
                <h3
                    className='footer__column_top'
                >
                    Узнайте первыми о новинках и акциях
                </h3>
            <input 
                type = "search"
                id='email'
                onChange={ (e) => handleInput(e) }
                className='feedback__input footer__column_item'
                placeholder='Адрес электронной почты'
            ></input>
            <button
                disabled = { !valid }
                className={ valid? 'feedback__submit' : 'feedback__submit invalid' }  
            >
                Подписаться
            </button>
        </form>
    )
}

export default Feedback