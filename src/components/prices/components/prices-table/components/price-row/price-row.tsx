import { BaseProps } from "~/common/interfaces/interfaces";
import { Price } from "../components";
import { Gradation } from "~/common/enums/enums";

import styles from "./styles.module.scss";

interface IPrice {
  id: number;
  title: string;
  barberPrice?: number;
  topPrice?: number;
  expertPrice?: number;
  ambassadorPrice?: number;
  subtitle?: string;
}

interface Props extends BaseProps {
  price: IPrice;
  isMuted?: boolean;
  isFirstRow?: boolean;
}

const PriceRow: React.FC<Props> = ({
  price,
  isMuted = false,
  isFirstRow = false,
  className = "",
}) => {
  return (
    <div className={`${styles.row} ${isMuted && styles.muted} ${className}`}>
      <div className={styles.title}>
        <span>{price.title}</span>
        {price.subtitle && (
          <span className={styles.subtitle}> ({price.subtitle})</span>
        )}
      </div>

      <div className={styles.prices}>
        <Price
          price={price.barberPrice}
          isFirstRow={isFirstRow}
          gradation={Gradation.BARBER}
        />
        <Price
          price={price.topPrice}
          isFirstRow={isFirstRow}
          gradation={Gradation.TOP_BARBER}
        />
        <Price
          price={price.expertPrice}
          isFirstRow={isFirstRow}
          gradation={Gradation.EXPERT}
        />
        <Price
          price={price.ambassadorPrice}
          isFirstRow={isFirstRow}
          gradation={Gradation.AMBASSADOR}
        />
      </div>
    </div>
  );
};

export { PriceRow };
