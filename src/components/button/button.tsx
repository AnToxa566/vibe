import { ButtonTitle } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  title: ButtonTitle;
}

const Button: React.FC<Props> = ({ title, className = "" }) => {
  return <button className={`${styles.btn} ${className}`}>{title}</button>;
};

export { Button };
