"use client";

import { useContext, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import { AppSubtitle, AppTitle, ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { Container, Title } from "../components";
import { MasterCard } from "./components/components";
import { BarbershopContext } from "~/providers/barberhop-provider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.scss";
import styles from "./styles.module.scss";

const Masters: React.FC<BaseProps> = ({ className = "" }) => {
  const { barbershop } = useContext(BarbershopContext);

  useEffect(() => {
    if (barbershop) {
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.src = "https://w822235.alteg.io/widgetJS";

      document.head.appendChild(script);
    }
  }, [barbershop]);

  return (
    barbershop &&
    barbershop.barbers && (
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
            {barbershop.barbers.map((it) => (
              <SwiperSlide key={it.id}>
                <MasterCard barber={it} className={styles.masterCard} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.mastersList}>
            {barbershop.barbers.map((it) => (
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
