import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  title: string;
  white?: boolean;
}

const Title: React.FC<Props> = ({ title, white = false, className = "" }) => {
  return (
    <h2
      className={`${styles.title} ${
        white ? "text-white" : "text-regular-grey"
      } ${className}`}
    >
      {title}
    </h2>
  );
};

export { Title };
