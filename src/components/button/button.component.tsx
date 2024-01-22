import { ComponentProps } from "react";
import styles from "./button.styles.module.scss";
import { giveColor } from "utils/giveColor/giveColor";

type CustomButtonProps = {
  /**
   * To declare button's state(coloring)
   */
  variant: "primary" | "accept" | "warn" | "danger";
  /**
   * The text inside the button
   */
  readonly title: string;
};

type ButtonProps = CustomButtonProps & ComponentProps<"button">;

/**
 * Clickable component to catch user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  title = "Submit",
  ...props
}) => {
  return (
    <button className={`${styles.button} ${giveColor(variant)}`} {...props}>
      {title}
    </button>
  );
};
