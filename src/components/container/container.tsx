import { BaseProps } from "~/common/interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`${styles.customContainer} ${className}`}>{children}</div>
  );
};

export { Container };
