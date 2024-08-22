import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css' 
import { motion } from "framer-motion";

const container = (delay) =>({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0 ,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}, 
    },
}) ;

const Hero = () => {
    return (
       <div id='home' className="hero">  
           <motion.h1 variants={container(0)}
            initial="hidden"
            animate="visible"><span>I'm Swostik Mishra,</span> Full Stack Developer and DevOPS Engineer based in India.</motion.h1>
           <motion.p variants={container(0.5)}
            initial="hidden"
            animate="visible">I am a Full Stack Developer who has a knowledge in HTML,CSS and its various framework such as
            Bootstrap and Tailwind,JavaScript,TypeScript,famous icon library such as Material UI,ReactJS,NextJS
            ,backend technologies such as NodeJS,ExpressJS.I also have knowledges in various databases like
            MongoDB,Firebase,PostGreSQL,Oracle,MySQL.I have a keen interest in DevOPS field and I am looking 
            forward to work in it.I also have knowledge in AWS and its various services also. 

            As a dedicated and ambitious IT student with a robust background in full-stack web development,
            DevOps practices, and Amazon Web Services (AWS), I bring a comprehensive skill set and a proactive
            approach to problem-solving. My hands-on experience encompasses designing, developing, deploying,
            and maintaining web applications, coupled with an in-depth understanding of cloud infrastructure and
            continuous integration/continuous deployment (CI/CD) pipelines. 
           </motion.p>
           <div className="hero-action">
               <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
               <div className="hero-resume">My Resume</div>
           </div>
       </div>
    )     
};
 
export default Hero;