import { motion } from "framer-motion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { styles } from "../styles";
import { useEffect, useState } from "react";
// import { ComputersCanvas } from "./canvas";
import waIcon from "../components/whatsapp.png";
import ash from "../components/ash.png";
const Hero = () => {
  const [hasVibrated, setHasVibrated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasVibrated(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-sm:top-24 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FEA82F]" />
          <div className="w-1 sm:h-80 h-40 sec-gradient" />
        </div>

        <div className="flex justify-between gap-20">
          <div className="flex flex-col justify-around  pt-8 max-sm:pt-0">
            <h1 className={`${styles.heroHeadText} text-tertiary`}>
              Hi, I&apos;m Ashad
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a Professional Photographer I will shoot{" "}
              <br className="sm:block hidden" />
              your Portfolio. I am based in Islamabad.
            </p>
            <a
              href="#"
              className=" text-secondary px-5 py-3 bg-tertiary w-1/3 text-xl "
            >
              Connect Now
            </a>
          </div>

          <div className=" ">
            <img
              className="w-80 ml-18 mt-5 h-auto object-cover rounded-full"
              src={ash}
              alt="photographer"
            />
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={hasVibrated ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed bottom-20 right-20 max-sm:bottom-10 max-sm:right-10 z-10 h-[64px] w-[64px]"
      >
        <a href="https://api.whatsapp.com/send?phone=923045807224">
          <motion.img
            src={waIcon}
            alt="WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
