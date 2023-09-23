"use client";

import { useContext, useEffect } from "react";
import { useQuery } from "react-query";

import { BarberContext } from "~/providers/barber-provider";
import { BaseProps } from "~/common/interfaces/interfaces";
import { PriceRow, PricesBlock } from "./components/components";
import { graduationService, serviceService } from "~/services/services";

import styles from "./styles.module.scss";

const PricesTable: React.FC<BaseProps> = ({ className = "" }) => {
  const { barberID } = useContext(BarberContext);

  const { data: services } = useQuery("services", serviceService.getAll);

  const { data: graduations } = useQuery(
    "graduations",
    graduationService.getAll
  );

  return (
    <div className={`${styles.container} ${className}`}>
      {services && (
        <div className={styles.table}>
          {services.map((service, index) => (
            <PriceRow
              key={service.id}
              service={service}
              isMuted={index % 2 === 0}
              isFirstRow={index === 0}
            />
          ))}
        </div>
      )}

      {graduations && services && (
        <div className={styles.mobileTable}>
          {graduations
            .sort((a, b) => a.id - b.id)
            .map((graduation, index) => (
              <PricesBlock
                key={graduation.id}
                graduation={graduation.title}
                reverse={index % 2 === 0}
                services={services.map((service) => ({
                  title: service.title,
                  cost:
                    service.prices.find(
                      (price) =>
                        price.barbershop.id === barberID &&
                        price.graduation.title === graduation.title
                    )?.value || 0,
                  subtitle: service.subtitle,
                }))}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export { PricesTable };
