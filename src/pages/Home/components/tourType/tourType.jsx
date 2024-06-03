import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img from '../../../../assets/img/bandarbon.jpg';
import PackageTitle from './packageTitle';
import useOurPackages from '../../../../hooks/useOurPackages';

const TourType = () => {
  const [ourpackages] = useOurPackages();

  return (
    <div className="hero mb-16 min-h-[300px]" style={{ backgroundImage: `url(${img})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
      <div className='mb-4'>
      <h1 className='font-bold'>Here is our all type of tour</h1>
      <p className='opacity-50'>yourself in the rich cultural heritage of Bangladesh by visiting historical sites and experiencing local traditions.</p>
      </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {ourpackages.map((item, index) => (
              <SwiperSlide key={index} className='border-2 border-white mb-10 p-10 grid justify-center text-center rounded-full'>
                <PackageTitle ourPackage={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TourType;
