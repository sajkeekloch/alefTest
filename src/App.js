import { useState } from 'react';
import './App.css';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import Suggestions from './components/Suggestions/Suggestions';

function App() {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div className="App">
      <DropdownMenu 
        menuIsOpen = { menuIsOpen }
        toggleMenu = { toggleMenu }
      />
      <Header 
        toggleMenu = { toggleMenu }
      />
      <Main />
      <Suggestions />
      <Footer />
    </div>
  );
}

export default App;
