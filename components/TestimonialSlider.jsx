// testimonial data
const testimonialData = [
  {
    image: "/avatar_mael.png",
    name: "Johan Martínez",
    position: "Customer",
    message:
      "Amazing web design job! I'm really impressed with the team's attention to detail and quick response. My website looks exactly as I imagined. Thank you!",
  },
  {
    image: "/avatar_female.png",
    name: "Relinde Bedoya",
    position: "Customer",
    message:
      "Very happy with the web design service! John perfectly understood my needs and they managed to capture my brand identity on the site. Highly recommended!",
  },
  {
    image: "/avatar_female.png",
    name: "Adela Martínez",
    position: "Customer",
    message:
      "Excellent web design service! The process was smooth and efficient, and the end result exceeded my expectations. Thank you for making my vision come to life online. Thank you for the great work!",
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  <div className='text-lg'>{person.name}</div>
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
                <div className='mt-4 flex justify-end'>
                  <FaQuoteRight className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
