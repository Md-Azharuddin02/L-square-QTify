import styles from "./Logo.module.css";
import { FaHeadphones } from "react-icons/fa";

function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.text}>Q</span>
      <FaHeadphones className={styles.icon} />
      <span className={styles.text}>tify</span>
    </div>
  );
}

export default Logo;
