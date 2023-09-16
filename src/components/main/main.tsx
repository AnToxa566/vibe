import Image from "next/image";

import { BaseProps } from "~/common/interfaces/interfaces";
import { AppSubtitle, ButtonTitle } from "~/common/enums/enums";
import { Button, Container } from "../components";
import { Header } from "./components/header/header";
import { AddressSelect, Logo } from "./components/components";

import man from "~/../public/images/home-man.png";
import elipse from "~/../public/svg/ellipse-white.svg";

import styles from "./styles.module.scss";

const Main: React.FC<BaseProps> = ({ className = "" }) => {
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
            <Button
              title={ButtonTitle.ONLINE_ENTRY}
              className={`${styles.btn} ${styles.entryBtn}`}
            />
            <Button
              title={ButtonTitle.CALL}
              className={`${styles.btn} ${styles.callBtn}`}
            />
          </div>

          <AddressSelect className={styles.address} />
        </div>
      </Container>
    </div>
  );
};

export { Main };
