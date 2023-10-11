"use client";

import { useContext } from "react";

import { Price } from "../price/price";
import { IService } from "~/common/interfaces/service/service.interface";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { BarbershopContext } from "~/providers/barberhop-provider";

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
  const { barbershop } = useContext(BarbershopContext);

  const prices = service.prices
    .filter((it) => it.barbershop.id === barbershop?.id)
    .sort((a, b) => a.graduation.priority - b.graduation.priority);

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
