import styles from "./FAQ.module.css";

import Accordion from "../Accordion/Accordion";

const faqData = [
  {
    question: "Is QTify free to use?",
    answer:
      "Yes! QTify is completely free to use for streaming music.",
  },

  {
    question:
      "Can I download and listen to songs offline?",

    answer:
      "Sorry, unfortunately we don't provide the service to download any songs.",
  },
];

const FAQ = () => {
  return (
    <section className={styles.faq}>
      <h2>FAQs</h2>

      <div className={styles.container}>
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;