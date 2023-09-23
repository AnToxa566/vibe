import Image from "next/image";

import { ButtonTitle } from "~/common/enums/enums";
import { BaseProps, IBarber } from "~/common/interfaces/interfaces";
import { Button } from "~/components/components";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  barber: IBarber;
}

const MasterCard: React.FC<Props> = ({ barber, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <Image
        src={`/images/masters${barber.imgPath}`}
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

      <Button title={ButtonTitle.ONLINE_ENTRY} className={styles.btn} />
    </div>
  );
};

export { MasterCard };
