"use client";

import { useRef } from "react";

import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

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
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    onClick();
    ref.current?.blur();
  };

  return (
    <button
      onClick={handleClick}
      ref={ref}
      className={`${styles.btn} ${className}`}
    >
      {title}
    </button>
  );
};

export { Button };
