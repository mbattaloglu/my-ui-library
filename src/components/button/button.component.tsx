import styles from "./button.styles.module.scss";

export type ButtonTypes = {
  Primary,
  Accept,
  Danger,
  Warn,
}

type ButtonProps = {
  variant: keyof ButtonTypes;
  readonly title: string;
};

function giveColor(variant: ButtonTypes) {
  switch (variant) {
    case Primary: {
      return styles.primary;
    }
    case Accept: {
      return styles.accept;
    }
    case Danger: {
      return styles.danger;
    }
    case Warn: {
      return styles.warn;
    }
  }
}

const Button: React.FC<ButtonProps> = ({ variant, title }) => {
  return (
    <button className={`${styles.button} ${giveColor(variant)}`}>
      {title}
    </button>
  );
};

export default Button;
