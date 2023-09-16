"use client";

import { useContext } from "react";

import { Gradation } from "~/common/enums/enums";
import { BarberContext } from "~/providers/barber-provider";
import { BaseProps } from "~/common/interfaces/interfaces";
import { PriceRow, PricesBlock } from "./components/components";

import prices from "~/assets/data/prices.json";
import styles from "./styles.module.scss";

const PricesTable: React.FC<BaseProps> = ({ className = "" }) => {
  const { barberID } = useContext(BarberContext);

  const barberPrices = prices.filter((price) => price.barberId === barberID);

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.table}>
        {barberPrices.map((price, index) => (
          <PriceRow
            key={price.id}
            price={price}
            isMuted={index % 2 === 0}
            isFirstRow={index === 0}
          />
        ))}
      </div>

      <div className={styles.mobileTable}>
        <PricesBlock
          gradation={Gradation.BARBER}
          reverse
          prices={barberPrices
            .filter((price) => price.barberPrice)
            .map((price) => ({
              title: price.title,
              cost: price.barberPrice as number,
              subtitle: price.subtitle,
            }))}
        />

        <PricesBlock
          gradation={Gradation.TOP_BARBER}
          prices={barberPrices
            .filter((price) => price.topPrice)
            .map((price) => ({
              title: price.title,
              cost: price.topPrice,
              subtitle: price.subtitle,
            }))}
        />

        <PricesBlock
          gradation={Gradation.EXPERT}
          reverse
          prices={barberPrices
            .filter((price) => price.expertPrice)
            .map((price) => ({
              title: price.title,
              cost: price.expertPrice,
              subtitle: price.subtitle,
            }))}
        />

        <PricesBlock
          gradation={Gradation.AMBASSADOR}
          prices={barberPrices
            .filter((price) => price.ambassadorPrice)
            .map((price) => ({
              title: price.title,
              cost: price.ambassadorPrice as number,
              subtitle: price.subtitle,
            }))}
        />
      </div>
    </div>
  );
};

export { PricesTable };
