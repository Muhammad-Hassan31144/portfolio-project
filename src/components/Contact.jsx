// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { slideIn } from "../utils/motion";
// import contact  from "../components/contact.png"
import ash from "../components/ash.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  
  return (
    <>
    <div
          className={`bg-secondary rounded-2xl ${styles.padding} min-h-[240px] mt-10 w-full`}
      >
          <h1 className={`${styles.heroHeadText} text-tertiary`}>Contact Now</h1>
          
    </div>
    
    <div
      id="contact"
      className={`xl:-mt-20 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
    
    
      <div
        className='w-full justify-center bg-black-100 p-8 ml-[64px] mr-4 rounded-3xl'
      >

      <div className="flex gap-3 ">
          <img className="w-1/2 rounded-2xl" src={ash} alt="" height={540} />
          <img className="w-1/2 rounded-2xl" src={ash} alt="" height={540} />
      </div>
      <div className="flex justify-center">
      <a
          href='https://www.instagram.com/inno_awan' // Replace with your Instagram URL
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <FontAwesomeIcon icon={faInstagram} size="6x" />
        </a>
        <a
          href='https://wa.me/923045807224' // Replace with your WhatsApp URL
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <FontAwesomeIcon icon={faWhatsapp} size="6x" />
        </a>
        <a
          href='#' // Replace with your Facebook URL
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <FontAwesomeIcon icon={faFacebook} size="6x" />
        </a>

      </div>
      
    </div>
    
</div>
</>
  );
};

export default Contact;