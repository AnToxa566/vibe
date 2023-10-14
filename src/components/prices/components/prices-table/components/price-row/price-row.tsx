import { Price } from "../price/price";
import { IPrice } from "~/common/interfaces/price/price.interface";
import { IService } from "~/common/interfaces/service/service.interface";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  service: IService;
  prices: IPrice[];
  isMuted?: boolean;
  isFirstRow?: boolean;
}

const PriceRow: React.FC<Props> = ({
  service,
  prices,
  isMuted = false,
  isFirstRow = false,
  className = "",
}) => {
  return (
    <div className={`${styles.row} ${isMuted && styles.muted} ${className}`}>
      <div className={styles.title}>
        <span>{service.title}</span>
        {service.subtitle && (
          <span className={styles.subtitle}> ({service.subtitle})</span>
        )}
      </div>

      <div className={styles.prices}>
        {prices.map((price) => (
          <Price
            key={price.id}
            price={price.value}
            isFirstRow={isFirstRow}
            graduation={price.graduation.title}
          />
        ))}
      </div>
    </div>
  );
};

export { PriceRow };
