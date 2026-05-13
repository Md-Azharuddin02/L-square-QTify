import styles from "./Tabs.module.css";

const tabs = [
  "All",
  "Rock",
  "Pop",
  "Jazz",
  "Blues",
];

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button key={tab}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;