import React,{ useEffect, useRef, useState } from "react";
import './Navbar.css'; 
import menu_open from './../../assets/menu_open.svg'
import menu_close from './../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = ({ text,speed }) => {
     
  const menuRef = useRef(null);
  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, index, text, speed]);

    return (
     <div className="navbar">
      <h1 className="nav-title">{displayedText}</h1>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
         <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" /> 
         <li><AnchorLink className="anchor-link" href="#home">Home</AnchorLink></li>
         <li><AnchorLink className="anchor-link" offset={50} href="#about">About Me</AnchorLink></li> 
         <li><AnchorLink className="anchor-link" offset={50} href="#services">Services</AnchorLink></li>
         <li><AnchorLink className="anchor-link" offset={50} href="#work">Portfolio</AnchorLink></li>
         <li><AnchorLink className="anchor-link" offset={50} href="#contact">Contact</AnchorLink></li>
      </ul>
     <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )  
};

export default Navbar;