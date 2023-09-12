"use client";

import { useContext } from "react";

import { BarberContext } from "~/providers/barber-provider";
import { BaseProps } from "~/common/interfaces/interfaces";
import { PriceRow } from "./components/components";

import prices from "~/assets/data/prices.json";

const PricesTable: React.FC<BaseProps> = ({ className = "" }) => {
  const { barberID } = useContext(BarberContext);

  const barberPrices = prices.filter((price) => price.barberId === barberID);

  return (
    <div className={`flex flex-col ${className}`}>
      {barberPrices.map((price, index) => (
        <PriceRow
          key={price.id}
          price={price}
          isMuted={index % 2 === 0}
          isFirstRow={index === 0}
        />
      ))}
    </div>
  );
};

export { PricesTable };
