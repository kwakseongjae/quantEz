import { Content0A } from "./Content0A";
import { Content0B } from "./Content0B";
import { Content0C } from "./Content0C";
import { Content0D } from "./Content0D";

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
        <SwiperSlide>
          <Content0B />
        </SwiperSlide>
        <SwiperSlide>
          <Content0C />
        </SwiperSlide>
        <SwiperSlide>
          <Content0D />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
