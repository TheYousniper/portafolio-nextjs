// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Chilling Time",
          path: "/Proyecto01.jpg",
          url: "https://chillingtime.co/",
        },
        {
          title: "Movie Trailer App",
          path: "/proyecto02.jpg",
          url: "https://movie-trailer-john.netlify.app/",
        },
        {
          title: "Halloween page",
          path: "/Proyecto03.jpg",
          url: "https://halloween-page-replicated.netlify.app/",
        },
        {
          title: "Pokedex",
          path: "/Proyecto04.jpg",
          url: "https://john-quinto-entregable-pokedex.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Rick and Morty App",
          path: "/Proyecto05.jpg",
          url: "https://john-lanza-entreg03-rick-and-morty.netlify.app/",
        },
        {
          title: "Weather App",
          path: "/Proyecto06.jpg",
          url: "https://weather-app-john.netlify.app/",
        },
        {
          title: "Pokecard App",
          path: "/Proyecto07.jpg",
          url: "https://pokecard-john-random.netlify.app/",
        },
        {
          title: "Quote Box App",
          path: "/Proyecto08.jpg",
          url: "https://quote-box-entregable01-john-lanza.netlify.app/",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] top-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <Link href={image.url} target="blank">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100">LIVE</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300">
                              {image.title}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
