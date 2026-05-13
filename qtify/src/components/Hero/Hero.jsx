import styles from "./Hero.module.css";

import headphone from "../../assets/Hero/headphone.png";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1>
          100 Thousand Songs, ad-free
        </h1>

        <h1>
          Over thousands podcast episodes
        </h1>
      </div>

      <div className={styles.right}>
        <img
          src={headphone}
          alt="headphone"
        />
      </div>
    </section>
  );
};

export default Hero;