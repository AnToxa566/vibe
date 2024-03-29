"use client";

import { useContext } from "react";

import Link from "next/link";
import Image from "next/image";

import { getNumberForLink } from "~/common/utils";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";
import { AppSubtitle, ButtonTitle } from "~/common/enums/enums";
import { Button, Container } from "../components";
import { Header } from "./components/header/header";
import { AddressSelect, Logo } from "./components/components";
import { BarbershopContext } from "~/providers/barberhop-provider";

import man from "~/../public/images/home-man.png";
import elipse from "~/../public/svg/ellipse-white.svg";

import styles from "./styles.module.scss";

const Main: React.FC<BaseProps> = ({ className = "" }) => {
  const { barbershop } = useContext(BarbershopContext);

  return (
    <div className={`${className}`}>
      <Header className={styles.header} />

      <Container className={styles.main}>
        <Logo className={styles.logo} />

        <Image unoptimized src={man} alt="Adult man" className={styles.man} />
        <Image unoptimized src={elipse} alt="" className={styles.elipse} />

        <div className={styles.content}>
          <p className={styles.text}>{AppSubtitle.MAIN}</p>

          <div className={styles.buttons}>
            <Link
              href="#"
              className="ms_booking"
              data-url="https://n822098.alteg.io/select-city"
            >
              <Button
                title={ButtonTitle.ONLINE_ENTRY}
                className={`${styles.btn} ${styles.entryBtn}`}
              />
            </Link>

            {barbershop && barbershop.phoneNumbers.length && (
              <Link
                target="_blank"
                href={`tel:${getNumberForLink(barbershop.phoneNumbers[0])}`}
              >
                <Button
                  title={ButtonTitle.CALL}
                  className={`${styles.btn} ${styles.callBtn}`}
                />
              </Link>
            )}
          </div>

          <AddressSelect className={styles.address} />
        </div>
      </Container>
    </div>
  );
};

export { Main };
