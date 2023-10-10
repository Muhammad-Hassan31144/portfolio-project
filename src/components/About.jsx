import ash from "../components/ash.png"
import Slider  from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {styles} from '../styles'
const About = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust this value to control the speed of the autoplay
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
          className={`bg-secondary rounded-2xl ${styles.padding} min-h-[240px] mt-10 w-full`}
      >
          <h1 className={`${styles.heroHeadText} text-tertiary`}>About Myself</h1>
      </div>
      
    <section id='about' className={`${styles.paddingX} -mt-16 max-w-5xl border-2 ml-[54px] border-red-400 bg-tertiary rounded-[30px] flex max-sm:flex-col justify-end items-center` }>
      
      <div className="flex flex-col max-sm:p-3 justify-start items-center w-1/2  max-sm:w-full ">
      
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a <span className='text-[#FEA82F]'>Professional Photographer.</span> I will shoot <br className="sm:block hidden" /> your <span className='text-[#FEA82F]'>Portfolio.</span> I am based in Islamabad.
        </p>
      </div>
      <div className="w-1/2  h-90% p-4 max-sm:w-full">
        <Slider {...settings}>
          <div className="h-[580px]">
            <img src={ash} alt="Image 1" className="w-full" />
          </div>
          <div className="h-[580px]">   
            <img src={ash} alt="Image 2" className="w-full" />
          </div>  
          <div className="h-[580px]">
            <img src={ash} alt="Image 3" className="w-full" />
          </div>    
          {/* Add more images as needed */}
        </Slider>
      </div>
    
    </section>
    </>
  );
};


export default About