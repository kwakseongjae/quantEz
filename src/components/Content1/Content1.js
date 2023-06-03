import { Content1A } from "./Content1A";
import { Content1B } from "./Content1B";
import { Content1C } from "./Content1C";
import { Content1D } from "./Content1D";
import { Content1E } from "./Content1E";
import { Content1F } from "./Content1F";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);
export const Content1 = () => {
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
          <Content1A />
        </SwiperSlide>
        <SwiperSlide>
          <Content1B />
        </SwiperSlide>
        <SwiperSlide>
          <Content1C />
        </SwiperSlide>
        <SwiperSlide>
          <Content1D />
        </SwiperSlide>
        <SwiperSlide>
          <Content1E />
        </SwiperSlide>
        <SwiperSlide>
          <Content1F />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
