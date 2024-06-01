import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import image1 from '../../../assets/images/Children-pet-dog.webp';
import image2 from '../../../assets/images/images (3).jpg';
import image3 from '../../../assets/images/iStock-1324099927.jpg';
import image4 from '../../../assets/images/pets-3715733_640.jpg';
import image5 from '../../../assets/images/web_whyarabbitistheperfectpetforthefamily.jpg';


const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto mb-10">
        <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper ">
          <SwiperSlide><div className="max-w-7xl"><img className="w-full h-[550px] rounded-lg" src={image1} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-7xl"><img className="w-full h-[550px] rounded-lg" src={image2} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-7xl"><img className="w-full h-[550px] rounded-lg" src={image3} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-7xl"><img className="w-full h-[550px] rounded-lg" src={image4} alt="" /></div></SwiperSlide>      
          <SwiperSlide><div className="max-w-7xl"><img className="w-full h-[550px] rounded-lg" src={image5} alt="" /></div></SwiperSlide>      
        </Swiper>
      </div>
    );
};

export default Banner;