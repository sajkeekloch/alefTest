import './Header.css';
import Logo from '../images/logo.svg'
import Person from '../images/person.svg'
import Bucket from '../images/bucket.svg'
import Heart from '../images/heart.svg'
import Burger from '../images/burger.svg'


function Header(props) {
  return (
    <div className="header">
      <div className='header__background'/>
      <img 
          src={Logo}
          alt='logo'
          className='header__logo'
      />
      <ul className='header__icons'>
          <li className='icons__icon'>
            <img 
              src={Person}
              alt='person'
            />
          </li>
          <li className='icons__icon'>
            <img 
                src={Heart}
                alt='heart'
            />
          </li>
          <li className='icons__icon'>
            <img 
                src={Bucket}
                alt='bucket'
            />
          </li>
          <li 
            onClick={ () => props.toggleMenu() }
            className='icons__icon icons__icon_burger'>
            <img 
                src={Burger}
                alt='Burger'
            />
          </li>
      </ul>
    </div>
  );
}

export default Header;
