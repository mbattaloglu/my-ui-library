import { giveColor } from "utils/giveColor/giveColor";
import styles from "./modal.module.scss";

type ModalProps = {
  /**
   * To declare modal's state(coloring)
   */
  variant: "primary" | "accept" | "warn" | "danger";
  /**
   * The main text
   */
  readonly title: string;
  /**
   * The descriptive text
   */
  readonly description: string;
};

/**
 * Component to show user warning message, or status of the application
 */
export const Modal: React.FC<ModalProps> = ({
  variant = "primary",
  title,
  description,
}) => {
  const x = "\u2715"; //HTML Entity "X"

  return (
    <div className={`${styles.modal} ${giveColor(variant)}`}>
      <h4 className={styles["modal-title"]}>{title}</h4>
      <p className={styles["modal-description"]}>{description}</p>
      <button className={styles["modal-button"]}>{x}</button>
    </div>
  );
};
