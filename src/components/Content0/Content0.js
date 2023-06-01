import { Content0A } from "./Content0A";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);
export const Content0 = () => {
  return (
    <div className="contents">
      <Swiper
        spaceBetween={50}
        slidesPerView="auto"
        navigation
        pagination={{ clickable: true }}
        style={{
          "--swiper-navigation-color": "#5400cf",
          "--swiper-navigation-size": "25px",
        }}
      >
        <SwiperSlide>
          <Content0A />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};
