import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search a album of your choice"
      />

      <button>
        <CiSearch/>
      </button>
    </div>
  );
};

export default Search;  