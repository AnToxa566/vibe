"use client";

import Link from "next/link";
import Image from "next/image";

import { ButtonTitle } from "~/common/enums/enums";
import { ENV } from "~/common/constants/constants";
import { IBarber } from "~/common/interfaces/barber/barber.interface";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { Button } from "~/components/components";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  barber: IBarber;
}

const MasterCard: React.FC<Props> = ({ barber, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <Image
        src={`${ENV.API_URL}/${barber.imgPath}`}
        alt={`Барбер ${barber.name}`}
        width="190"
        height="260"
        className={styles.img}
      />

      <div className={styles.content}>
        <div className={styles.line}></div>

        <div className={styles.data}>
          <span className={styles.name}>{barber.name}</span>
          <span className={styles.graduation}>{barber.graduation.title}</span>
        </div>
      </div>

      <Link
        href="#"
        className="ms_booking"
        data-url={`https://n822235.alteg.io/company/${barber.barbershop.companyId}/menu?o=m${barber.altegioId}`}
      >
        <Button title={ButtonTitle.ONLINE_ENTRY} className={styles.btn} />
      </Link>
    </div>
  );
};

export { MasterCard };
