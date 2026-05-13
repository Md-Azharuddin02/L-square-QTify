import styles from "./Card.module.css";

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={data.image}
          alt={data.title}
        />

        <div className={styles.badge}>
          {data.follows
            ? `${data.follows} Follows`
            : "100 Likes"}
        </div>
      </div>

      <p className={styles.title}>
        {data.title}
      </p>
    </div>
  );
};

export default Card;