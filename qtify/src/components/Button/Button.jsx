import styles from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <button className={styles.button} text="Give Feedback">
      {text}
    </button>
  );
};

export default Button;