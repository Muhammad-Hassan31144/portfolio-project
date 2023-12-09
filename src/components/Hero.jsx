import { motion } from "framer-motion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { slideIn } from "../utils/motion";

// import { ComputersCanvas } from "./canvas";
import waIcon from "../components/whatsapp.png";
import ash from "../components/ash.png";
const Hero = () => {
  const [hasVibrated, setHasVibrated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasVibrated(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  const animationVariants = slideIn("left", "easeOut", 0, 1);
  const animationVariants1 = slideIn("right", "easeOut", 0, 1);
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <section
      className={`${styles.paddingX}relative flex justify-between max-sm:flex-col max-sm:py-20 max-sm:px-11 py-16 max-w-7xl mx-auto`}
    >
      <div className="flex gap-8 ">
        {/* <div className="flex flex-col justify-end items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-tertiary" />
          <div className="w-1 sm:h-90 h-40 sec-gradient" />
        </div> */}

        <div className="flex">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={animationVariants}
            className="flex flex-col justify-center gap-11 pt-8 max-sm:pt-0"
          >
            <h1 className={`${styles.heroHeadText} text-tertiary`}>
              Hi, I&apos;m Ashad
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a Professional Photographer I will shoot{" "}
              <br className="sm:block hidden" />
              your Portfolio. I am based in Islamabad.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className=" text-secondary px-5 py-3 bg-tertiary w-1/3 text-xl max-sm:w-1/2 max-sm:whitespace-nowrap"
            >
              Connect Now
            </motion.a>
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={animationVariants1}
        className="mt-5"
      >
        <img
          className="w-81 mr-10 mt-8 h-auto object-cover rounded-full "
          src={ash}
          alt="photographer"
        />
      </motion.div>
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
