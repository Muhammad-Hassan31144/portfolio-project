/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const animationVariants = slideIn("up", "easeOut", 0, 1);

  const [ref, inView] = useInView({ triggerOnce: false });

  const scrollToSection = (sectionId, duration = 2000) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const startTime = performance.now();

      const scroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const newPosition =
          startPosition + (targetPosition - startPosition) * progress;

        window.scrollTo(0, newPosition);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  };
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.getElementById("navbar");

      if (prevScrollPos > currentScrollPos) {
        // Scroll up
        navbar.style.transform = "translateY(0)";
      } else {
        // Scroll down
        navbar.style.transform = "translateY(-100%)";
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      id="navbar"
      className={`${styles.paddingX} w-full transition-top duration-300 flex items-center py-4 fixed top-0 z-20 bg-primary`}
    >
      <motion.div
        className="w-full max-w-7xl flex justify-between items-center mx-auto"
        ref={ref}
        animate={inView ? "show" : "hidden"}
        initial="hidden"
        variants={animationVariants}
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="pt-2">
            <img
              className="mx-auto my-auto w-10 h-10 object-contain pr-1 pt-1"
              src={logo}
              alt="logo"
            />
          </div>
          <p className="text-secondary text-[18px] font-bold cursor-pointer flex">
            Inno <span className="sm:block hidden">&nbsp;Studio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{ scale: 1.1 }} // Adjust the scale factor as needed
              className={`${
                active === link.title ? "text-tertiary" : "text-secondary"
              } hover:text-tertiary text-[18px] font-medium cursor-pointer`}
            >
              <Link
                to={`#${link.title}`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="
            w-[28px] h-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-[60px] -right-4 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-tertiary" : "text-secondary"
                  } hover:text-tertiary font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
