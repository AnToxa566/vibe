"use client";

import { useContext } from "react";
import { useQuery } from "react-query";

import {
  AppSubtitle,
  AppTitle,
  ModuleID,
  QueryKey,
} from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Carousel, Container, Title } from "../components";
import { MasterCard } from "./components/components";
import { BarberContext } from "~/providers/barber-provider";
import { barberService } from "~/services/services";

import styles from "./styles.module.scss";

const Masters: React.FC<BaseProps> = ({ className = "" }) => {
  const { barberID } = useContext(BarberContext);

  const { data: barbers } = useQuery(
    QueryKey.GET_BARBERS,
    barberService.getAll
  );

  const barberMasters = barbers?.filter((it) => it.barbershop.id === barberID);

  return (
    barberMasters && (
      <div className={`${styles.masters} ${className}`} id={ModuleID.MASTERS}>
        <Container className={styles.container}>
          <Title title={AppTitle.MASTERS} />

          <p className={styles.subtitle}>{AppSubtitle.MASTERS}</p>

          <Carousel className={styles.carousel}>
            {barberMasters.map((it) => (
              <MasterCard
                key={it.id}
                barber={it}
                className={styles.masterCard}
              />
            ))}
          </Carousel>

          <div className={styles.mastersList}>
            {barberMasters.map((it) => (
              <MasterCard
                key={it.id}
                barber={it}
                className={styles.masterCard}
              />
            ))}
          </div>
        </Container>

        <div className={`${styles.circle} ${styles.big}`}></div>
        <div className={`${styles.circle} ${styles.small}`}></div>
      </div>
    )
  );
};

export { Masters };
