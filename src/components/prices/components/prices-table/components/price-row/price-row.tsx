"use client";

import { useContext } from "react";

import { BaseProps, IService } from "~/common/interfaces/interfaces";
import { BarberContext } from "~/providers/barber-provider";
import { Gradation } from "~/common/enums/enums";
import { Price } from "../components";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  service: IService;
  isMuted?: boolean;
  isFirstRow?: boolean;
}

const PriceRow: React.FC<Props> = ({
  service,
  isMuted = false,
  isFirstRow = false,
  className = "",
}) => {
  const { barberID } = useContext(BarberContext);

  const barberPrices = service.prices.filter(
    (it) => it.barbershop.id === barberID
  );

  return (
    <div className={`${styles.row} ${isMuted && styles.muted} ${className}`}>
      <div className={styles.title}>
        <span>{service.title}</span>
        {service.subtitle && (
          <span className={styles.subtitle}> ({service.subtitle})</span>
        )}
      </div>

      <div className={styles.prices}>
        {barberPrices.map((price) => (
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
