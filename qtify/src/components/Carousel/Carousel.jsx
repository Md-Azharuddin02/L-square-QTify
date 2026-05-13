import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";

import Card from "../Card/Card";

const Carousel = ({ data }) => {
  return (
<Swiper
  className={styles.swiper}
  modules={[Navigation]}
  navigation
  spaceBetween={20}
  slidesPerView={"auto"}
>
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          className={styles.slide}
        >
          <Card data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;