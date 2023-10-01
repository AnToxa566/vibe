import { StageCount, StagePrice, StageText } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  count: StageCount;
  price: StagePrice;
  text: StageText;
}

const Stage: React.FC<Props> = ({ count, price, text, className = "" }) => {
  const addDotToPrice = (price: StagePrice) => price / 1000 + "." + "000";

  return (
    <div
      className={`${styles.stage}
                  ${count === StageCount.FIRST ? styles.first : ""}
                  ${count === StageCount.SECOND ? styles.second : ""}
                  ${count === StageCount.THIRD ? styles.third : ""}
                  ${className}`}
    >
      <div className={styles.top}>
        <span className={styles.count}>Stage {count}</span>
        <span className={styles.price}>{addDotToPrice(price)}₴</span>
      </div>

      <p>{text}</p>
    </div>
  );
};

export { Stage };
