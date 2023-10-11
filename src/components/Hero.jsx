import { motion } from "framer-motion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import waIcon  from "../components/whatsapp.png"

const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-sm:top-24 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FEA82F]' />
          <div className='w-1 sm:h-80 h-40 sec-gradient' />
        </div>

        <div className="pt-8 max-sm:border-2 max-sm:border-red-400 max-sm:pt-0">
          <h1 className={`${styles.heroHeadText} text-tertiary`}>
          Hi, I&apos;m <span className='text-[#FEA82F]'>Ashad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a <span className='text-[#FEA82F]'>Professional Photographer.</span> I will shoot <br className="sm:block hidden" /> 
          your <span className='text-[#FEA82F]'>Portfolio.</span> I am based in Islamabad.

          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      <div>
      <a href="https://api.whatsapp.com/send?phone=923045807224" className="fixed bottom-20 right-20 max-sm:bottom-10 max-sm:right-10 z-10 h-[64px] w-[64px] " >
      {/* <FontAwesomeIcon icon={faWhatsapp} size="6x" className="max-sm:w-[64px] max-sm:h-[64px]" /> */}
        <img src={waIcon} alt="WhatsApp"/>
      </a>

      </div>
    </section>
  );
};

export default Hero;