import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../../assets/img/amiakhum.jpg'
import img2 from '../../../assets/img/bandarbon.jpg'
import img3 from '../../../assets/img/coxbazar.jpg'
import img4 from '../../../assets/img/kaptai.jpg'
import img5 from '../../../assets/img/kuakata.jpg'
import img6 from '../../../assets/img/kukrimukry.jpg'
import img7 from '../../../assets/img/sadapathor.jpg'
import img8 from '../../../assets/img/stmarten.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannarCard from './bannarCard';
const Bannar = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><BannarCard img={img1} heading='Amia Khume' subheading='Amiakhum is a breathtaking waterfall located in the remote Thanchi Upazila of Bandarban district in Bangladesh. It is surrounded by dense forests and rugged terrain, offering a spectacular view and a challenging trek for adventure seekers. The pristine beauty and the serene environment make it a hidden gem for nature lovers and hikers.'></BannarCard></SwiperSlide>
      <SwiperSlide><BannarCard img={img2} heading='Bandorban' subheading='Bandarban, a district in the Chittagong Hill Tracts of Bangladesh, is known for its stunning mountainous landscapes, rich indigenous culture, and diverse flora and fauna. Popular attractions include Nilgiri Hills, Boga Lake, and the serene Sangu River, making it a favorite destination for trekkers and nature enthusiasts.'></BannarCard></SwiperSlide>
      <SwiperSlide><BannarCard img={img3} heading={`cox's Bazar`} subheading={`Cox's Bazar, located in southeastern Bangladesh, is renowned for having the world's longest natural sea beach, stretching over 120 kilometers along the Bay of Bengal. It is a major tourist destination known for its golden sandy beaches, vibrant local markets, and attractions such as Himchari National Park and the picturesque Inani Beach.`}></BannarCard></SwiperSlide>
      <SwiperSlide><BannarCard img={img4} heading='Kapti lacke' subheading='Kaptai Lake, located in the Rangamati district of Bangladesh, is the countrys largest man-made lake, created by damming the Karnaphuli River. Surrounded by lush green hills and scenic landscapes, the lake is a popular destination for boating, fishing, and exploring the natural beauty of the Chittagong Hill '></BannarCard></SwiperSlide>
      <SwiperSlide><BannarCard img={img5} heading='Kuakata Sea Beach' subheading='Kuakata Sea Beach, located in the Patuakhali district of Bangladesh, is renowned for its panoramic views of both sunrise and sunset over the Bay of Bengal. Known as the "Daughter of the Sea," Kuakata offers a serene and picturesque environment, attracting tourists with its wide sandy beaches, gentle waves, and vibrant cultural heritage.'></BannarCard></SwiperSlide>
      <SwiperSlide><BannarCard img={img6} heading='Char Kukri Mukri' subheading='Char Kukri Mukri is a remote island in the Bhola district of Bangladesh, renowned for its untouched natural beauty, mangrove forests, and diverse wildlife. It offers a serene escape with opportunities for bird watching, exploring mangroves, and enjoying the tranquility of its pristine environment.'></BannarCard></SwiperSlide>
      <SwiperSlide><BannarCard img={img7} heading='Shada Pathor' subheading='Shada Pathor in Sylhet, Bangladesh, is a stunning natural spot known for its white stone landscape and crystal-clear waters of the Piyain River. It attracts tourists with its scenic beauty and tranquil environment, making it a popular destination for nature lovers and photographers.'></BannarCard></SwiperSlide>
      <SwiperSlide><BannarCard img={img8} heading='St Martin' subheading='St. Martins Island in Bangladesh is a small, picturesque island in the Bay of Bengal known for its clear blue waters, coral reefs, and vibrant marine life. It is a popular destination for eco-tourism, offering a serene escape with its pristine beaches and natural beauty.'></BannarCard></SwiperSlide>
      
    </Swiper>
  </>
  )
}

export default Bannar
