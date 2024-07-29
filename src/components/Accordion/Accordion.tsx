import React, { useState } from "react";
import styles from "./Accirdion.module.css";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={toggleAccordion}>
        {title}
        <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}></span>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
        <p>{children}</p>
      </div>
    </div>
  );
}
