import Image from "next/image";

import { ENV } from "~/common/constants/constants";
import { BaseProps } from "~/common/interfaces/base-props/base-props.interface";

import styles from "./styles.module.scss";

interface Props extends BaseProps {
  imgPath: string;
}

const GalleryCard: React.FC<Props> = ({ imgPath, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <Image
        unoptimized
        src={imgPath}
        referrerPolicy="no-referrer"
        alt="Photo in the gallery"
        width={180}
        height={200}
        className={styles.img}
      />
    </div>
  );
};

export { GalleryCard };
