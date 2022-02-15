import './Footer.css'
import About from './About/About'
import Customers from './Customers/Customers'
import Feedback from './Feedback/Feedback'

function Footer() {
    return(
        <footer className='footer'>
            <Customers />
            <About />
            <Feedback />
        </footer>
    )
}

export default Footer