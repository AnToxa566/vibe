import { FC } from "react";

import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { PriceTitle } from "../price-title/price-title";

import styles from "./styles.module.scss";

interface IService {
  title: string;
  cost: number;
  subtitle?: string;
}

interface Props extends BaseProps {
  graduation: string;
  services: IService[];
  reverse?: boolean;
}

const PricesBlock: FC<Props> = ({
  graduation,
  services,
  reverse = false,
  className = "",
}) => {
  return (
    <div className={`${styles.pricesBlock} ${className}`}>
      <PriceTitle
        title={graduation}
        reverse={reverse}
        className={styles.title}
      />

      <div className={styles.table}>
        {services.filter((service) => !!service.cost).map((service, index) => (
          <div
            key={`${
              service.title + service.subtitle ? service.subtitle : ""
            }`}
            className={`${styles.row} ${!(index % 2) ? styles.muted : ""}`}
          >
            <div className={styles.priceTitle}>
              <span>{service.title}</span>
              {service.subtitle && (
                <span className={styles.subtitle}> ({service.subtitle})</span>
              )}
            </div>

            <span className={styles.priceCost}>{service.cost} ₴</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { PricesBlock };
