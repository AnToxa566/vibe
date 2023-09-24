"use client";

import { BaseProps } from "~/common/interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  title,
  onClick = () => {},
  className = "",
}) => {
  return (
    <button onClick={() => onClick()} className={`${styles.btn} ${className}`}>
      {title}
    </button>
  );
};

export { Button };
