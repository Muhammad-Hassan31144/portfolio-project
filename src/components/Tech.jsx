/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { collections } from "../constants";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { slideIn } from "../utils/motion";
const Card = ({ collection }) => {
  // const animationVariants = {
  //   initial: { opacity: 0, x: isEven ? "100%" : "-100%" },
  //   animate: { opacity: 1, x: 0 },
  // };
  // const animationVariants = slideIn("left", "easeOut", 0, 1);
  // const [ref, inView] = useInView({
  //   triggerOnce: false, // Ensures the animation triggers only once
  // });

  return (
    <div className="flex flex-col max-w-7xl mx-auto ">
      <motion.h1
        className={`${styles.heroSubText} text-center py-7 rounded-xl bg-tertiary`}
      >
        {collection.title}
      </motion.h1>
      <Swiper
        spaceBetween={0}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container mySwiper"
      >
        {collection.pic.map((image, imgIndex) => (
          <SwiperSlide key={`${collection.title}-${imgIndex}`}>
            <img
              src={image}
              alt={`${collection.title} image ${imgIndex}`}
              className="swiper-slide h-[600px] w-full object-contain"
            />
          </SwiperSlide>
        ))}
        <div className="slider-controler flex justify-center items-center">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
const Tech = () => {
  const animationVariants = slideIn("up", "easeOut", 0, 2);
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <div id="portfolio" className="pt-9 overflow-x-hidden">
      <div
        className={`bg-secondary bg-opacity-80 rounded-2xl ${styles.paddingX} pt-5 min-h-[240px] max-w-7xl mx-auto`}
      >
        <motion.div
          ref={ref}
          animate={inView ? "show" : "hidden"}
          initial="hidden"
          variants={animationVariants}
        >
          <p className={`${styles.sectionSubText} `}>
            Have a Look at my Collection
          </p>
          <h2 className={`${styles.sectionHeadText} `}>My Portfolio</h2>
        </motion.div>
      </div>
      <div className="-mt-[72px] w-100% mx-[56px] max-sm:mx-[24px]">
        {collections.map((collection) => (
          <Card key={collection.title} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default Tech;
