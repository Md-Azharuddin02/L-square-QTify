import styles from "./Card.module.css";

const Card = ({
  image,
  title,
  follows,
  onClick,
}) => {
  return (
    <div
      className={styles.card}
      onClick={onClick}
    >
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={title}
        />

        <span>{follows} Follows</span>
      </div>

      <p>{title}</p>
    </div>
  );
};

export default Card;