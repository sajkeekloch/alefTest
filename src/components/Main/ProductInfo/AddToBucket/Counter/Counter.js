import './Counter.css'

function Counter(props) {

    const handleClick = (operation) => {
        if(operation === 'plus') {
            props.setCount(props.count + 1)
        } 
        if(operation === 'minus' && props.count > 0) {
            props.setCount(props.count - 1)
        } 
    }

    return (
        <div className='counter'>
            <div 
                onClick={() => handleClick('plus') }
                className='counter__item counter__plus'
            >+</div>
            <div 
                className='counter__item counter__value'
            >{ props.count }</div>
            <div    
                onClick={() => handleClick('minus') }
                className='counter__item counter__minus'
            >-</div>
        </div>
    )
}

export default Counter