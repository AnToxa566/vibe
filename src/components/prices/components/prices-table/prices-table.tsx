"use client";

import { useContext, useState, useEffect } from "react";
import { useMutation } from "react-query";

import { BarberContext } from "~/providers/barber-provider";
import {
  BaseProps,
  IGraduation,
  IService,
} from "~/common/interfaces/interfaces";
import { PriceRow, PricesBlock } from "./components/components";
import { graduationService, serviceService } from "~/services/services";

import styles from "./styles.module.scss";

const PricesTable: React.FC<BaseProps> = ({ className = "" }) => {
  const { barberID } = useContext(BarberContext);

  const [services, setServices] = useState<IService[]>([]);

  const [graduations, setGraduations] = useState<IGraduation[]>([]);

  const { mutate: getServices } = useMutation(
    "getServices",
    () => serviceService.getAll(),
    {
      onSuccess(data) {
        setServices(data);
      },
    }
  );

  const { mutate: getGraduations } = useMutation(
    "getGraduations",
    () => graduationService.getAll(),
    {
      onSuccess(data) {
        setGraduations(data);
      },
    }
  );

  useEffect(() => {
    getServices();
    getGraduations();
  }, [getServices, getGraduations]);

  return (
    <div className={`${styles.container} ${className}`}>
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
    </div>
  );
};

export { PricesTable };
