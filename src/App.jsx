import React, { useEffect, useState } from "react";
import './index.css';
import Navbar from './components/Navbar/Navbar'; 
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services'
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { motion } from "framer-motion"; 

const App = () => {
    
    const [mousePostion,setMousePosition] = useState({
      x: 0,
      y: 0
    });

    const [cursorVariant,setCursorVariant] = useState("default");
    
    
    useEffect(() => {
      const mouseMove = e => {
         setMousePosition({
           x: e.clientX,
           y: e.clientY
         })
      } 

      window.addEventListener("mousemove",mouseMove);
      
      return () => {
         window.removeEventListener("mousemove",mouseMove); 
      }
    }, [])

    const variants = {
      default: {
        x: mousePostion.x - 8,
        y: mousePostion.y - 8
      }
    }


    const text = "Swostik!!";
    const speed = 200;

    return (
      <div className="app">
        <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant} />
        <Navbar text={text} speed={speed} />
        <Hero/>
        <About/> 
        <Services/>
        <MyWork/>
        <Contact/>
        <Footer/>
      </div> 
    )
};
export default App;
