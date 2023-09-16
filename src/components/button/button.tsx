import { ButtonTitle } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";

import styles from "./styles.module.scss";

type colors = "regular-grey" | "white" | "transparent";

interface Props extends BaseProps {
  title: ButtonTitle;
  bgColor?: colors;
  textColor?: colors;
  borderColor?: colors;
}

const Button: React.FC<Props> = ({
  title,
  bgColor = "transparent",
  textColor = "regular-grey",
  borderColor = "regular-grey",
  className = "",
}) => {
  return (
    <button
      className={`${styles.btn} border-${borderColor} text-${textColor} bg-${bgColor} ${className}`}
    >
      {title}
    </button>
  );
};

export { Button };
