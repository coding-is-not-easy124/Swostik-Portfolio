import React from 'react'
import './Contact.css'
import mail_icon from './../../assets/mail_icon.svg'
import call_icon from './../../assets/call_icon.svg'
import location_icon from './../../assets/location_icon.svg'
import { motion } from 'framer-motion'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3a32ab92-be20-40da-a06a-fda54c36bbe7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1> 
      </div>
      <div className='contact-section'>
        <motion.div whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0,x: -100}}
         transition={{duration: 1}} className='contact-left'>
          <h1>Let's Talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' />
              <p>swostikmishra9@gmail.com</p>                   
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='' />
              <p>+91 8926090021</p>
            </div>
            <div className='contact-detail'>
               <img src={location_icon} alt='' />
               <p>Bhubaneswar,Odisha,India</p>
            </div>
          </div>
        </motion.div>
        <motion.form whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0,x: 100}}
         transition={{duration: 1}} onSubmit={onSubmit} className='contact-right'>
          <label htmlFor=''>Your name</label>
          <input type='text' placeholder='Enter your name' name='name' />
          <label htmlFor=''>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' />
          <label htmlFor=''>Write your message here</label>
          <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact