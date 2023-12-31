import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  children: React.ReactNode;
}

const RoundedContainer: React.FC<Props> = ({ children, className = "" }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export { RoundedContainer };
