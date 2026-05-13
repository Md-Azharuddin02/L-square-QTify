import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <h2>{title}</h2>
        {title !== "Songs" && <button>Show all</button>}
        
      </div>

      {children}
    </section>
  );
};

export default Section;