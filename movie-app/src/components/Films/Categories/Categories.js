import React from "react";
import classes from  "./Categories.module.css";
import PropTypes from "prop-types";

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
       <span className={classes.title}>{props.films.type.toUpperCase()}</span>
      <Swiper
        loop={true}
        spaceBetween={window.matchMedia("(min-width: 600px)").matches ? 90 : 30}
        slidesPerView={window.matchMedia("(min-width: 600px)").matches ? 5 : 2}
        navigation
      >
        {props.films.data.map((item, index) => {
          return (
            <SwiperSlide className={classes.slider} key={item.id}>
              <img
                onClick={() => props.click(props.films.type,index)}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.original_name}
              />
            </SwiperSlide>
          );
        })}
       
      </Swiper>
    </React.Fragment>
  );
};

Categories.propTypes = {
  films: PropTypes.object,
  click: PropTypes.func
  
};

export default Categories;
