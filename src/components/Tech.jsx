/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { collections } from "../constants";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Card = ({ collection }) => {
  
  return(
      <div className="flex flex-col">
      <h1 className={`${styles.heroSubText} text-center py-7 rounded-xl bg-tertiary`}>{collection.title}</h1>
      <Swiper
        spaceBetween={-50}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: '.swiper-pagination',
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
)}
const Tech = () => {
  return (
    <div id="work" className="pt-9">
    <div
        className={`bg-secondary rounded-2xl ${styles.paddingX} pt-5 min-h-[240px] `}
      >

    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} `}>
        Have a Look at my Collection
      </p>
      <h2 className={`${styles.sectionHeadText} `}>
        My Portfolio
      </h2>
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

export default Tech