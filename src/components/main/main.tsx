"use client";

import { useContext } from "react";

import Link from "next/link";
import Image from "next/image";

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

  const getNumberForLink = (phoneNumber: string) => {
    return phoneNumber.replace(/\D/g, "");
  };

  return (
    <div className={`${className}`}>
      <Header className={styles.header} />

      <Container className={styles.main}>
        <Logo className={styles.logo} />

        <Image src={man} alt="Adult man" className={styles.man} />
        <Image src={elipse} alt="" className={styles.elipse} />

        <div className={styles.content}>
          <p className={styles.text}>{AppSubtitle.MAIN}</p>

          <div className={styles.buttons}>
            <Link
              href="#"
              className="ms_booking"
              data-url="https://n822098.alteg.io/"
            >
              <Button
                title={ButtonTitle.ONLINE_ENTRY}
                className={`${styles.btn} ${styles.entryBtn}`}
              />
            </Link>

            {barbershop && barbershop.phoneNumbers.length && (
              <Link
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
