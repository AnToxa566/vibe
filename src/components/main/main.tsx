import Image from "next/image";

import { BaseProps } from "~/common/interfaces/interfaces";
import { AppSubtitle, ButtonTitle } from "~/common/enums/enums";
import { Button, Container } from "../components";
import { Header } from "./components/header/header";
import { AddressSelect, Logo } from "./components/components";

import man from "~/../public/images/home-man.png";
import styles from "./styles.module.scss";

const Main: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <Header className={styles.header} />

      <Container className={styles.main}>
        <Logo className={styles.logo} />

        <div className={styles.content}>
          <p className={styles.text}>{AppSubtitle.MAIN}</p>

          <Button title={ButtonTitle.ONLINE_ENTRY} className={styles.btn} />

          <AddressSelect />
        </div>
      </Container>

      <Image src={man} alt="Adult man" className={styles.man} />
    </div>
  );
};

export { Main };
