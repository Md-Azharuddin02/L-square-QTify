import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = ({ title, endpoint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [endpoint]);

  return (
    <section className={styles.section}>
      <div className={styles.topRow}>
        <h2 className={styles.title}>{title}</h2>

        <span className={styles.showAll}>
          Show All
        </span>
      </div>

      <Carousel data={data} />
    </section>

  );
};

export default Section;