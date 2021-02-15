import { useEffect, useState } from "react";
import styles from "./technology.module.css";

export type TechnologyProps = {
  name: string;
  highlight?: boolean;
};

export default function Technology({ name, highlight }: TechnologyProps) {
  const [iconUrl, setIconUrl] = useState("");

  useEffect(() => {
    const slug = name
      .toLowerCase()
      .replace(/#/, " sharp")
      .replace(/[^a-zA-Z0-9]/g, "-");
    setIconUrl(`/technologies/${slug}.svg`);
  });

  return (
    <div
      className={
        styles.technology + " " + (highlight ? styles.technologyHighlight : "")
      }
    >
      <div className={styles.imageWrapper}>
        <img src={iconUrl} alt={name} />
      </div>
      <div className={styles.technologyName}>{name}</div>
    </div>
  );
}
