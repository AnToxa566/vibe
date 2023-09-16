import Image from "next/image";

import { AppSubtitle, AppTitle, ModuleID } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Container, RoundedContainer, Title } from "../components";
import { PricesTable } from "./components/components";

import elipse from "~/../public/svg/elipse.svg";
import styles from "./styles.module.scss";

const Prices: React.FC<BaseProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`} id={ModuleID.PRICES}>
      <RoundedContainer className={styles.roundedContainer}>
        <Container className={styles.container}>
          <Title title={AppTitle.PRICES} white className={styles.title} />

          <p className={styles.subtitle}>{AppSubtitle.PRICES}</p>

          <PricesTable />
        </Container>

        <Image
          src={elipse}
          alt=""
          className={`${styles.elipse} ${styles.first}`}
        />
        <Image
          src={elipse}
          alt=""
          className={`${styles.elipse} ${styles.second}`}
        />
      </RoundedContainer>
    </div>
  );
};

export { Prices };
