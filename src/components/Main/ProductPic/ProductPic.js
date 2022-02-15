import Miniatures from './Miniatures/Miniatures';
import { useState } from 'react'
import './ProductPic.css';

function ProductPic() {

  const [choosen, setChoosen] = useState(1)

  const handleClick = (id) => {
      setChoosen(id + 1)
  }

  return (
    <div className='productPic'>
        <img 
          alt='mainImage'
          src={ require(`../../images/mainImage${choosen}.png`) }
          className='productPic_image'
        />
        <Miniatures 
          choosen = { choosen }
          setChoosen =  { setChoosen }
          handleClick = { handleClick }
        />
    </div>
  );
}

export default ProductPic;
