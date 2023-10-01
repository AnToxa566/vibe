"use client";

import { useContext } from "react";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import {
  AppSubtitle,
  AppTitle,
  ModuleID,
  QueryKey,
} from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { Container, FullSpinner, Title } from "../components";
import { MasterCard } from "./components/components";
import { BarbershopContext } from "~/providers/barberhop-provider";
import { barberService } from "~/services/services";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.scss";
import styles from "./styles.module.scss";

const Masters: React.FC<BaseProps> = ({ className = "" }) => {
  const { barbershop } = useContext(BarbershopContext);

  const { data: barbers, isLoading } = useQuery(
    QueryKey.GET_BARBERS,
    barberService.getAll
  );

  const barberMasters = barbers?.filter(
    (it) => it.barbershop.id === barbershop?.id
  );

  if (isLoading) {
    return <FullSpinner />;
  }

  return (
    barberMasters && (
      <div className={`${styles.masters} ${className}`} id={ModuleID.MASTERS}>
        <Container className={styles.container}>
          <Title title={AppTitle.MASTERS} />

          <p className={styles.subtitle}>{AppSubtitle.MASTERS}</p>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1100: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Keyboard, Pagination, Navigation]}
            className={styles.carousel}
          >
            {barberMasters.map((it) => (
              <SwiperSlide key={it.id}>
                <MasterCard barber={it} className={styles.masterCard} />
              </SwiperSlide>
            ))}
          </Swiper>

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
