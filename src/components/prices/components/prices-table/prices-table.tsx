"use client";

import { useContext } from "react";
import { useQuery } from "react-query";

import { BarbershopContext } from "~/providers/barberhop-provider";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { QueryKey } from "~/common/enums/enums";
import { FullSpinner } from "~/components/components";
import { PriceRow } from "./components/price-row/price-row";
import { PricesBlock } from "./components/prices-block/prices-block";
import { graduationService, serviceService } from "~/services/services";

import styles from "./styles.module.scss";

const PricesTable: React.FC<BaseProps> = ({ className = "" }) => {
  const { barbershop } = useContext(BarbershopContext);

  const { data: services, isLoading: servicesLoading } = useQuery(
    QueryKey.GET_SERVICES,
    serviceService.getAll
  );

  const { data: graduations, isLoading: graduationsLoading } = useQuery(
    QueryKey.GET_GRADUATIONS,
    graduationService.getAll
  );

  if (servicesLoading || graduationsLoading) {
    return <FullSpinner />;
  }

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
                        price.barbershop.id === barbershop?.id &&
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
