import { BaseProps } from "~/common/interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  title: string;
  reverse?: boolean;
}

const PriceTitle: React.FC<Props> = ({
  title,
  reverse = false,
  className = "",
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div
        className={`${styles.innerContainer} ${reverse ? styles.reverse : ""}`}
      >
        <span className={styles.title}>{title}</span>

        <div className={styles.box} />
      </div>
    </div>
  );
};

export { PriceTitle };
