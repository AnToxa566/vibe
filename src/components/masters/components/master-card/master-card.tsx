import Image from "next/image";

import { ButtonTitle } from "~/common/enums/enums";
import { BaseProps } from "~/common/interfaces/interfaces";
import { Button } from "~/components/components";

import styles from "./styles.module.scss";

interface IMaster {
  name: string;
  graduation: string;
  imgPath: string;
}

interface Props extends BaseProps {
  master: IMaster;
}

const MasterCard: React.FC<Props> = ({ master, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <Image
        src={`/images/masters${master.imgPath}`}
        alt={`Барбер ${master.name}`}
        width="190"
        height="260"
        className={styles.img}
      />

      <div className={styles.content}>
        <div className={styles.line}></div>

        <div className={styles.data}>
          <span className={styles.name}>{master.name}</span>
          <span className={styles.graduation}>{master.graduation}</span>
        </div>
      </div>

      <Button
        title={ButtonTitle.ONLINE_ENTRY}
        textColor="white"
        bgColor="regular-grey"
        className={styles.btn}
      />
    </div>
  );
};

export { MasterCard };
