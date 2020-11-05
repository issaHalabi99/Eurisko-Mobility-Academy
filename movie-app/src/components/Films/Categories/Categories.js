import React from "react";
import "./Categories.css";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

const Categories = (props) => {
  return (
    <React.Fragment>
      <Swiper
        loop={true}
        spaceBetween={window.matchMedia("(min-width: 600px)").matches ? 90 : 0}
        slidesPerView={window.matchMedia("(min-width: 600px)").matches ? 5 : 2}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {props.actions.map((item, index) => {
          return (
            <SwiperSlide className="slider" key={item.id}>
              <img
                onClick={() => props.click(index)}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.original_name}
              />
            </SwiperSlide>
          );
        })}
        <span slot="container-start">Actions</span>
      </Swiper>
    </React.Fragment>
  );
};

export default Categories;
