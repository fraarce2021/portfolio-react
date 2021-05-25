import React, {useState, useEffect} from 'react';
import './App.css';
import Content from './components/Content';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero />
      <Content />
      <Footer />
    </>
  )
}

export default App;
