
import { styles } from "../styles";
import ash from "../components/ash.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  
  return (
    <>
    <div
          className={`bg-secondary rounded-2xl ${styles.paddingX} min-h-[35%] mt-10 w-full`}
      >
          <h1 className={`${styles.sectionHeadText} text-tertiary pl-3 pt-2`}>Contact Now</h1>
          
    </div>
    
    <div
      id="contact"
      className={`${styles.paddingX}  flex xl:flex-row flex-col-reverse max-sm:gap-4 gap-10 overflow-hidden`}
    >
    
    
      <div
        className='w-full justify-center bg-tertiary p-8 rounded-3xl'
      >

      <div className="flex gap-3 ">
          <img className="w-1/2 rounded-2xl" src={ash} alt="" height={540} />
          <img className="w-1/2 rounded-2xl" src={ash} alt="" height={540} />
      </div>
      <div className="flex justify-center mt-4 mx-7">
      <a
          href='https://www.instagram.com/inno_awan' // Replace with your Instagram URL
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <FontAwesomeIcon icon={faInstagram} size="6x"className="max-sm:w-[64px] max-sm:h-[64px]" />
        </a>
        <a
          href='https://wa.me/923045807224' // Replace with your WhatsApp URL
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <FontAwesomeIcon icon={faWhatsapp} size="6x" className="max-sm:w-[64px] max-sm:h-[64px]" />
        </a>
        <a
          href='#' // Replace with your Facebook URL
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <FontAwesomeIcon icon={faFacebook} size="6x" className="max-sm:w-[64px] max-sm:h-[64px]"/>
        </a>

      </div>
      
    </div>
    
</div>
</>
  );
};

export default Contact;