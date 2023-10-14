"use client";

import { useContext } from "react";
import { useQuery } from "react-query";

import { IPrice } from "~/common/interfaces/price/price.interface";
import { IService } from "~/common/interfaces/service/service.interface";
import { IGraduation } from "~/common/interfaces/graduation/graduation.interface";
import { BarbershopContext } from "~/providers/barberhop-provider";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { QueryKey } from "~/common/enums/enums";
import { FullSpinner } from "~/components/components";
import { PriceRow } from "./components/price-row/price-row";
import { PricesBlock } from "./components/prices-block/prices-block";
import { serviceService } from "~/services/services";

import styles from "./styles.module.scss";

const PricesTable: React.FC<BaseProps> = ({ className = "" }) => {
  const { barbershop } = useContext(BarbershopContext);

  const { data: services, isLoading: servicesLoading } = useQuery(
    QueryKey.GET_SERVICES,
    serviceService.getAll
  );

  const graduations = barbershop?.barbers
    .map((barber) => barber.graduation)
    .filter((graduation, index, self) => {
      const id = graduation.id;
      const isUnique = !self
        .slice(0, index)
        .some((otherGraduation) => otherGraduation.id === id);
      return isUnique;
    });

  const getServicePrices = (service: IService): IPrice[] => {
    return service.prices
      .filter(
        (it) =>
          it.barbershop.id === barbershop?.id &&
          graduations?.map((it) => it.id).includes(it.graduation.id)
      )
      .sort((a, b) => a.graduation.priority - b.graduation.priority);
  };

  const getServices = (graduation: IGraduation) => {
    return (
      services?.map((service) => ({
        title: service.title,
        cost:
          service.prices.find(
            (price) =>
              price.barbershop.id === barbershop?.id &&
              price.graduation.title === graduation.title
          )?.value || 0,
        subtitle: service.subtitle,
      })) || []
    );
  };

  if (servicesLoading) {
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
              prices={getServicePrices(service)}
              isMuted={index % 2 === 0}
              isFirstRow={index === 0}
            />
          ))}
        </div>
      )}

      {graduations && services && (
        <div className={styles.mobileTable}>
          {graduations
            .sort((a, b) => a.priority - b.priority)
            .map((graduation, index) => (
              <PricesBlock
                key={graduation.id}
                graduation={graduation.title}
                reverse={index % 2 === 0}
                services={getServices(graduation)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export { PricesTable };
