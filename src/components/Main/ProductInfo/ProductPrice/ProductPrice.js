import './ProductPrice.css'

function ProductPrice(props) {

    const discounts = () => props.discounts.map((el, id) => {
        return(
            <li 
                key={id}
                className='discounts__discount'>
                {el}
            </li>
        )
    })
    return (
        <div className='productPrice'>
            {
                props.discounts?
                    <>
                        <div className='productPice__numbers'>
                            <p   
                                className='numbers__actual'> 
                                { props.actualPrice } &#8381;
                            </p>
                            <p
                                className='numbers__old'>
                                { props.price } &#8381;
                            </p>
                        </div>
                        

                        <ul className='productPrice__discounts'>
                            {discounts()}
                        </ul>
                    </>
                   
                :
                <span> {props.price} &#8381; </span>
            }
        </div>
    )
}

export default ProductPrice