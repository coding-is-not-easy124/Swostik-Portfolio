import React from "react";
import './About.css';
import { motion } from "framer-motion";
import hero from '../../assets/hero.avif'
import { useState,useEffect,useRef } from "react";

const About = () => {
 
    const [count, setCount] = useState(0);
    const [hasCounted, setHasCounted] = useState(false);
    const counterRef = useRef(null);
  
    useEffect(() => {
      const start = 1;
      const end = 400;
      const duration = 4000;
      let startTime = null;
  
      const countStep = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentCount = Math.min(Math.floor((progress / duration) * (end - start) + start), end);
        setCount(currentCount);
        if (progress < duration) {
          requestAnimationFrame(countStep);
        }
      };
  
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasCounted) {
            setHasCounted(true);
            requestAnimationFrame(countStep);
          }
        },
        { threshold: 0.1 }
      );
  
      if (counterRef.current) {
        observer.observe(counterRef.current);
      }
  
      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }, [hasCounted]);

    return (
       <div id='about' className='about'>  
         <div className='about-title'>
            <h1>About Me</h1>   
         </div>
         <div className='about-sections'>
            <div className='about-right'>
                <div className='about-left'>
                  <motion.img whileInView={{opacity: 1,x: 0}}
                   initial={{opacity: 0, x: -100}}
                   transition={{duration: 1, delay: 0.5}}
                   src={hero} alt="" />
                </div>
                <div className='about-para'>
                    <motion.p whileInView={{opacity: 1,x: 0}}
                       initial={{opacity: 0, x: -100}}
                       transition={{duration: 1, delay: 0.5}}>
                       In the realm of Full Stack Web Development, I am proficient in both front-end and back-end technologies.
                       My front-end skills include HTML, CSS, and JavaScript, along with popular frameworks such as React
                       and Angular. On the back-end, I am experienced with Node.js, Express, and database management systems
                       like MongoDB and SQL. This comprehensive skill set allows me to build robust, scalable, and 
                       user-friendly web applications from the ground up.
                    </motion.p>
                    <motion.p whileInView={{opacity: 1,x: 0}}
                     initial={{opacity: 0, x: -100}}
                     transition={{duration: 1, delay: 0.5}}>
                       My interest in DevOps drives me to integrate and automate processes to improve efficiency
                       and collaboration within development teams. I am familiar with continuous integration and 
                       continuous deployment (CI/CD) pipelines, containerization tools like Docker, and 
                       orchestration platforms such as Kubernetes. I also have hands-on experience with version 
                       control systems like Git and infrastructure as code (IaC) tools such as Terraform and Ansible. 
                    </motion.p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>CSS</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>Tailwind</p><hr style={{width:"40%"}}/></div>
                    <div className='about-skill'><p>Bootstrap</p><hr style={{width:"40%"}}/></div>
                    <div className='about-skill'><p>JavaScript</p><hr style={{width:"40%"}}/></div>
                    <div className='about-skill'><p>TypeScript</p><hr style={{width:"40%"}}/></div>
                    <div className='about-skill'><p>ReactJS</p><hr style={{width:"40%"}}/></div>
                    <div className='about-skill'><p>NextJS</p><hr style={{width:"40%"}}/></div>
                    <div className='about-skill'><p>MaterialUI</p><hr style={{width:"30%"}}/></div>
                    <div className='about-skill'><p>NodeJS</p><hr style={{width:"20%"}}/></div>
                    <div className='about-skill'><p>ExpressJS</p><hr style={{width:"20%"}}/></div>
                    <div className='about-skill'><p>MySQL</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>Firebase</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>PostGreSQL</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>Oracle</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>MongoDB</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>AWS</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>DevOPS</p><hr style={{width:"40%"}}/></div>
                </div>
            </div>
         </div>
         <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>1</h1>
                <p>ONLINE INTERNSHIP IN CYBERSECURITY</p>    
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1 className='counter' ref={counterRef}>{count}+</h1>
                <p>LEETCODE QUESTIONS</p>    
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>2</h1>
                <p>ONLINE INTERNSHIPS IN WEB-DEVELOPMENT</p>    
            </div>
         </div>   
       </div>
    )      
};

export default About;