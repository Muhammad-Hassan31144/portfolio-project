// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { slideIn } from "../utils/motion";
import contact  from "../components/contact.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  
  return (
    <div
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        className='px-10 object-contain overflow-hidden xl:flex-1 xl:h-auto pb-11 md:h-[550px] h-[300px]'
      >
        {/* <EarthCanvas /> */}
          <img src={contact} alt="" />
      </div>
      <div
        className='flex-[0.75] bg-black-100 p-8 mr-2 rounded-2xl'
      >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <div className='flex gap-5 justify-center items-end mt-12 pl-4'>
        {/* Social Media Icons */}
        <a
          href='https://www.instagram.com/inno_awan' // Replace with your Instagram URL
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <FontAwesomeIcon icon={faInstagram} size="7x" />
        </a>
        <a
          href='https://wa.me/923045807224' // Replace with your WhatsApp URL
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <FontAwesomeIcon icon={faWhatsapp} size="7x" />
        </a>
        <a
          href='#' // Replace with your Facebook URL
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <FontAwesomeIcon icon={faFacebook} size="7x" />
        </a>
        {/* End of Social Media Icons */}
      </div>
      
    </div>
    
</div>

  );
};

export default Contact;