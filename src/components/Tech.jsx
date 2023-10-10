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
      <h1 className={`${styles.heroSubText} text-center py-3 bg-[#915eff]`}>{collection.title}</h1>
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
        // onSlideChange={() => setSelectedImageIndex(null)}
        className="swiper_container mySwiper"
      >
        {collection.pic.map((image, imgIndex) => (
          <SwiperSlide key={`${collection.title}-${imgIndex}`}>
            <img
              src={image}
              alt={`${collection.title} image ${imgIndex}`}
              className="swiper-slide h-[600px] w-full object-contain"
              // className={`gallery-image ${selectedImageIndex === imgIndex ? 'transform scale-150 z-10 cursor-zoom-out' : ''}`}
              // onClick={() => setSelectedImageIndex(selectedImageIndex === imgIndex ? null : imgIndex)}
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
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center pt-3`}>
        Have a Look at my Portfolio
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        My Collection
      </h2>
    </motion.div>
    {collections.map((collection) => (
          <Card key={collection.title} collection={collection} />
    ))}

  </>
);
};

export default Tech