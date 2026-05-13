import { useState } from "react";

import styles from "./Accordion.module.css";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button
        className={styles.header}
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>

        {open ? (
          <FaChevronUp />
        ) : (
          <FaChevronDown />
        )}
      </button>

      {open && (
        <div className={styles.body}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;