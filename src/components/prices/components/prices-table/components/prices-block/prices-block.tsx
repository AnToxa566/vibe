import { FC } from "react";

import { BaseProps } from "~/common/interfaces/interfaces";
import { PriceTitle } from "../components";

import styles from "./styles.module.scss";

interface IPrice {
  title: string;
  cost: number;
  subtitle?: string;
}

interface Props extends BaseProps {
  gradation: string;
  prices: IPrice[];
  reverse?: boolean;
}

const PricesBlock: FC<Props> = ({
  gradation,
  prices,
  reverse = false,
  className = "",
}) => {
  return (
    prices.length !== 0 && (
      <div className={`${styles.pricesBlock} ${className}`}>
        <PriceTitle
          title={gradation}
          reverse={reverse}
          className={styles.title}
        />

        <div className={styles.table}>
          {prices.map((price, index) => (
            <div
              key={price.title}
              className={`${styles.row} ${!(index % 2) ? styles.muted : ""}`}
            >
              <div className={styles.priceTitle}>
                <span>{price.title}</span>
                {price.subtitle && (
                  <span className={styles.subtitle}> ({price.subtitle})</span>
                )}
              </div>

              <span className={styles.priceCost}>{price.cost} ₴</span>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export { PricesBlock };
