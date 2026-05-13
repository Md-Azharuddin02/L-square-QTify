import { useRef } from "react";

import styles from "./Carousel.module.css";

import Card from "../Card/Card";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";



const Carousel = ({ data }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={scrollLeft}
      >
        <IoIosArrowDropleftCircle />
      </button>

      <div
        className={styles.carousel}
        ref={carouselRef}
      >
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            follows={item.follows}
            onClick={() => console.log("clicked")}
          />
        ))}
      </div>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={scrollRight}
      >
        <IoIosArrowDroprightCircle />

      </button>
    </div>
  );
};

export default Carousel;